import { buildElementTree } from "./functions.js";
import { menu } from "./menuData.js";

function renderMenuPage() {
  const menuContentContainer = buildElementTree({ type: 'div', attributes: {class: 'content-container'}});
  menuContentContainer.appendChild(buildMain());
  return menuContentContainer;
}


const buildMain = () => buildElementTree(
          { type: 'main', attributes: {id: 'menu-container'}, 
            children: [
              createMenuTitleObj(),
              createMenuSectionObj('appetizers', menu.appetizers),
              createMenuSectionObj('entrees', menu.entrees),
              createMenuSectionObj('desserts', menu.desserts),
              createMenuSectionObj('beverages', menu.beverages),
              {type: 'h1', text: '];',attributes: {class: 'dishes-close'}}
            ]}
);


function createMenuTitleObj() {
  return {type: 'h1', attributes: {class: 'dishes-open'}, 
          children: [
            {type: 'span', text: 'const ',  attributes: {class: 'const'}},
            {type: 'span', text: 'dishes', attributes: {class: 'var'}},
            {type: 'span', text: ' = ['}
          ]}
}


function createMenuSectionObj(section, sectionDishes) {
  return { type: 'section', attributes: { class: section},
  children: [
   { type:'h2', text: (`{ ${section.toUpperCase()}:`), attributes: {class: 'menu-section-header'} },
   { type: 'div', attributes: { class: `${section}-container` },
     children: sectionDishes
    },
     section !== 'beverages' ? {type: 'h2', text: '},', attributes: {class: 'menu-section-closer'}} : {type: 'h2', text: '}', attributes: {class: 'menu-section-closer'}}
  ]
}
}








export { renderMenuPage }