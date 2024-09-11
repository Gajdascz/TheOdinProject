import { LINKS, ICON_ATTRIBUTES, ICON_CLASSES } from "../Utils/constants.js";
import { buildElementTree } from "../Utils/elementObjBuilder.js";

const ghIconObj = ({
  link = LINKS.GITHUB,
  sizeClass = ICON_CLASSES.SMALL_ICON,
  accessText = "Opens my GitHub profile in a new tab",
} = {}) => ({
  type: "a",
  attributes: { href: link, target: "_blank", rel: "noopener noreferrer" },
  children: [
    { type: "span", text: accessText, attributes: { class: "accessability-text" } },
    {
      type: "svg",
      attributes: {
        class: `${sizeClass} icon gh-icon`,
        viewBox: ICON_ATTRIBUTES.GH.VIEW_BOX,
      },
      children: [
        {
          type: "path",
          attributes: {
            "fill-rule": ICON_ATTRIBUTES.GH.PATH_ONE.FILL_RULE,
            "clip-rule": ICON_ATTRIBUTES.GH.PATH_ONE.CLIP_RULE,
            "aria-hidden": "true",
            focusable: "false",
            d: ICON_ATTRIBUTES.GH.PATH_ONE.D,
          },
        },
        {
          type: "path",
          attributes: {
            d: ICON_ATTRIBUTES.GH.PATH_TWO.D,
          },
        },
      ],
    },
  ],
});

const previewIconObj = ({
  link,
  sizeClass = ICON_CLASSES.SMALL_ICON,
  accessText = "Opens a live preview of the project on Github in a new tab",
}) => ({
  type: "a",
  attributes: { href: link, target: ICON_ATTRIBUTES.TARGET },
  children: [
    { type: "span", text: accessText, attributes: { class: "accessability-text" } },
    {
      type: "svg",
      attributes: {
        class: `${sizeClass} icon preview-icon`,
        viewBox: ICON_ATTRIBUTES.LIVE_PREVIEW.VIEW_BOX,
        "aria-hidden": "true",
        focusable: "false",
      },
      children: [{ type: "path", attributes: { d: ICON_ATTRIBUTES.LIVE_PREVIEW.D } }],
    },
  ],
});

const linkedInIconObj = (
  sizeClass = ICON_CLASSES.SMALL_ICON,
  accessText = "Opens my LinkedIn profile in a new tab."
) => ({
  type: "a",
  attributes: { href: LINKS.LINKEDIN, target: ICON_ATTRIBUTES.TARGET },
  children: [
    { type: "span", text: accessText, attributes: { class: "accessability-text" } },
    {
      type: "svg",
      attributes: {
        class: `${sizeClass} icon linkedin-icon`,
        viewBox: ICON_ATTRIBUTES.LINKEDIN.VIEW_BOX,
        "aria-hidden": "true",
        focusable: "false",
      },
      children: [{ type: "path", attributes: { d: ICON_ATTRIBUTES.LINKEDIN.D } }],
    },
  ],
});

const ghIconElement = (sizeClass) => buildElementTree(ghIconObj({ sizeClass }));
const linkedInIconElement = (sizeClass) => buildElementTree(linkedInIconObj(sizeClass));

export { ghIconObj, previewIconObj, linkedInIconObj, ghIconElement, linkedInIconElement };
