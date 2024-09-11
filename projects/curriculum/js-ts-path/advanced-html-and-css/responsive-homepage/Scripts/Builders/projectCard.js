import { buildElementTree } from "../Utils/elementObjBuilder.js";
import { ghIconObj, previewIconObj } from "./icons.js";
import { CARD_CLASSES } from "../Utils/constants.js";
const headerObj = (projectName, githubLink, previewLink) => ({
  type: "div",
  attributes: { class: CARD_CLASSES.HEADER_CONTAINER },
  children: [
    {
      type: "h2",
      text: projectName,
      attributes: { class: CARD_CLASSES.HEADER_TEXT },
    },
    {
      type: "div",
      attributes: { class: CARD_CLASSES.ICON_CONTAINER },
      children: [
        ghIconObj({
          link: githubLink,
          accessText: `Opens my ${projectName} source repository on GitHub in a new tab.`,
        }),
        previewIconObj({
          link: previewLink,
          accessText: `Opens my ${projectName} live preview on GitHub in a new tab`,
        }),
      ],
    },
  ],
});

const imgObj = (imgLink, imgAlt) => ({
  type: "div",
  attributes: { class: CARD_CLASSES.IMAGE_CONTAINER },
  children: [{ type: "img", attributes: { class: CARD_CLASSES.IMAGE, src: imgLink, alt: imgAlt } }],
});

export const projectCard = ({ imgLink, imgAlt, projectName, projectDesc, githubLink, livePreviewLink }) =>
  buildElementTree({
    type: "div",
    attributes: { class: CARD_CLASSES.CARD },
    children: [
      imgObj(imgLink, imgAlt),
      {
        type: "div",
        attributes: { class: CARD_CLASSES.INFO_CONTAINER },
        children: [
          headerObj(projectName, githubLink, livePreviewLink),
          {
            type: "p",
            text: projectDesc,
            attributes: { class: CARD_CLASSES.PROJECT_DESC },
          },
        ],
      },
    ],
  });
