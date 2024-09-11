import asyncHandler from "express-async-handler";
import { Controller } from "../config/types.js";
import { RequestHandler } from "express";
import db from "../db/db.js";
import {
  RegExpMatcher,
  TextCensor,
  englishDataset,
  englishRecommendedTransformers,
} from "obscenity";
import { extendLogger } from "../config/logger.js";

interface MessageController extends Controller {
  getAllMessages: RequestHandler;
  getCreateNewMessage: RequestHandler;
  postCreateNewMessage: RequestHandler;
  getMessageDetail: RequestHandler;
}

const censor = new TextCensor();
const matcher = new RegExpMatcher({ ...englishDataset.build(), ...englishRecommendedTransformers });
const log = extendLogger("controllers:message");

const clean = (str: string) => {
  let clean = str.trim();
  if (clean.length === 0) throw new Error(`Message cannot be empty`);
  const matches = matcher.getAllMatches(clean);
  if (matches.length > 0) {
    clean = censor.applyTo(clean, matches);
    log("vulgar string detected");
  }
  return clean;
};

const messageController: MessageController = {
  getAllMessages: asyncHandler(async (req, res, next) => {
    const messages = await db.selectAllMessages();
    const formattedMessages = messages.map((msg) => ({
      ...msg,
      sent: msg.sent.toLocaleString(),
    }));
    log(`getAllMessages:`, formattedMessages);
    res.render("index", { title: "Mini Message Board", messages: formattedMessages });
  }),
  getCreateNewMessage: asyncHandler((req, res, next) => {
    res.render("form", { title: "New Message Form" });
  }),
  postCreateNewMessage: asyncHandler(async (req, res, next) => {
    const { nameInput, messageInput } = req.body;
    const cleanName = clean(nameInput);
    const cleanMessage = clean(messageInput);
    const sent = new Date();
    log("postCreateNewMessage", { cleanName, cleanMessage, sent });
    await db.insertMessage(cleanName, cleanMessage, sent);
    res.redirect("/");
  }),
  getMessageDetail: asyncHandler(async (req, res, next) => {
    if (!req.params.id) throw new Error("No id provided.");
    const msg = await db.selectById(req.params.id);
    if (!msg) throw new Error(`Message with id: ${req.params.id} not found.`);
    log("getMessageDetail", msg);
    res.render("messageDetail", { message: msg });
  }),
};

export { messageController };
