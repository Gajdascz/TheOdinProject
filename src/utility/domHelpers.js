const createElement = (tag, classes, attributes = {}, textContent = '', ns = false) => {
  let element;
  if (ns) element = document.createElementNS('http://www.w3.org/2000/svg', tag);
  else element = document.createElement(tag);
  if (Array.isArray(classes)) classes.forEach((classAttr) => element.classList.add(classAttr));
  else element.classList.add(classes);
  Object.entries(attributes).forEach(([attribute, value]) => element.setAttribute(attribute, value));
  element.textContent = textContent;
  return element;
};

// Recursively build DOM element tree
const SVGNS = 'http://www.w3.org/2000/svg';
function buildElementTree({
  type,
  attributes = {},
  text = null,
  children = [],
  nameSpace = null,
  listeners = {},
  ns = null
} = {}) {
  try {
    if ((type === 'svg' || type === 'path') && !nameSpace) nameSpace = SVGNS;
    const element = nameSpace === null ? document.createElement(type) : document.createElementNS(nameSpace, type);
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    if (text) element.textContent = text;

    for (const [event, actions] of Object.entries(listeners)) {
      if (Array.isArray(actions)) {
        actions.forEach((action) => {
          if (typeof action === 'function') {
            element.addEventListener(event, action);
          }
        });
      } else if (typeof actions === 'function') element.addEventListener(event, actions);
    }

    if (children && children.length > 0) {
      children.forEach((child) => {
        element.appendChild(buildElementTree(child));
      });
    }
    return element;
  } catch (e) {
    console.error(`Failed to build element: ${type}`, e);
  }
}

export { buildElementTree, createElement };
