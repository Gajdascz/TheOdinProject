# Odin Restaurant Page
- **Live Preview**: https://gajdascz.github.io/odin-restaurant-page/
- **Project Page**: [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)

# Details
## A Simple Fictitious Restaurant Webpage
* My inspiration for Programmers Pantry came from my love of programming and bad jokes.

## Purpose
* Creating this gave me valuable knowledge and experience working with Webpack and JS ES6 modules. Specifically:
  - Using separate Webpack config files for development and distribution as well as merging common exports to both.  
  - Setting up, structuring, and testing larger projects containing multiple JavaScript ES6 modules.
  -  Integrating CSS and assets into the build process with Webpack loaders.
  - Creating project automation scripts in the for building projects as well as setting up Webpack's devServer for both development and distribution environments.

## Usage and Specifics
* Each page's content is created from its own separate ES6 module and dynamically rendered when the page's button is clicked in the navigation menu.
* For DOM element creation and structuring, I created a recursive helper function named buildElementTree, found in functions.js.
  - This functions primary purpose is to avoid the repetitive writing/rewriting of the JS methods required when building a DOM element tree (createElement,setAttribute,append,classList, etc.).
  - buildElementTree takes an initial parent element (a JavaScript object containing all necessary details) and recursively appends its children, creating a clear and maintainable structure.
    ```JavaScript 
    buildElementTree({type, attributes={}, text=null, children=null, nameSpace=null})
    ```
  - `type`: Type of DOM element (`{type: 'div'}`)
  - `attributes`: Any and all attributes to be set on the element (`{attributes: {class: 'example'}}`)
  - `children`: Array of child elements following the same Object structure (`{children: [{type,attributes,children}]}`)
  - `namespace`: For namespaced elements like svg and path (`{nameSpace: "http://www.w3.org/2000/svg"}`) 

## Created With
* JavaScript
* HTML5
* CSS3 (Primarily Flexbox)
* Bundled with Webpack
* DALLE-3 For Images (I'm no artist)

## Necessary Improvements
* Responsive design
* Function Abstraction