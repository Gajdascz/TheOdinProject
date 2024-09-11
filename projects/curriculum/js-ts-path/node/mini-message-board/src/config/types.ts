import { type RequestHandler, type Application } from "express";
import e from "express";

interface Controller {
  [key: string]: RequestHandler;
}

interface Message {
  id: number;
  username: string;
  body: string;
  sent: Date;
}

interface App extends Application {
  isAwake: boolean;
}
type e = typeof e;
export type { Controller, Message, App, e };
