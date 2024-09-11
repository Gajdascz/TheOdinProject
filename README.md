# mockCartMart

mockCartMart is a minimalist faux e-commerce web application that demonstrates a custom shopping cart implementation.

Developed as part of [The Odin Project curriculum](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart), mockCartMart provided me with invaluable hands-on experience and deepened my understanding of working with React and React libraries including but not limited to,

- [React Testing Library](https://testing-library.com/)
- [React Router Library](https://reactrouter.com/en/main)
- [Styled Components Library](https://styled-components.com/)

**Live Preview:** [Hosted on Cloudflare Pages](https://mockcartmart.pages.dev/)

## Learning Outcomes

- **Testing React Components**
  - Set up and wrote unit tests using [React Testing Library](https://testing-library.com/).
  - Simulated user actions with `user-event` library.
- **Single Page Applications**
  - Built a single page application (SPA) with the [React Router Library](https://reactrouter.com/en/main).
  - Managed in-app navigation efficiently.
- **Styled Components**
  - Gained a fundamental understanding of the [Styled Components Library](https://styled-components.com/).
  - Improved cohesive and modular nature of components.
- **React Principles**
  - Deepened understanding of core principles and fundamentals:
    - State management
    - Uni-directional data-flow
    - Context management
    - Asynchronous operations with useEffect
    - JSX syntax
    - environment setup with Vite toolchain
    - Lazy loading and Suspense
    - Component-based project architecture
    - Type checking with the [PropTypes Library](https://github.com/facebook/prop-types).

## Features

- **Shopping cart**
  - Interactive and responsive.
  - Allows users to manage their product selections intuitively.
- **Product Search**
  - Matches input against all text associated with products by default.
  - Supports prefix specifiers (e.g., price:99.00) for targeted searches.
- **Product Filter**
  - Enables users to filter products based on various categories.
- **Product Sort**
  - Provides sorting options based on different criteria.
- **Responsive Design**
  - Fluidly adapts to dynamic content and view dimensions.
  - Minimal media queries adopting a 'naturally' flexible approach.
  - Hamburger navigation menu on mobile devices.
- **Hero Slider**
  - Displays images with optional text overlay.
  - Automatic slide changes, smooth animation, and clean design.
- **Featured Products**
  - Displays specific products based on categories/qualities.
- **Data Persistence**
  - Uses JavaScript's Local Storage to retain and manage the user's cart state across sessions.
- **Accessibility**
  - Incorporates a high contrast ratio across the application.
  - Relevant aria attributes.
  - Improved tab-index for better navigability.
- **Light/Dark Theme**
  - Allows user to easily toggle between light/dark theme.

## Future

### Improvements

- **Accessability**
  - Keyboard navigation
  - ARIA attributes
  - Thorough auditing
- **Documentation**
  - Add code comments throughout project.
- **Structure**
  - Centralize widely used constants and improve configuration files.
  - Review component styles.

## Created With

- **Languages**
  - [**JavaScript**](https://ecma-international.org/publications-and-standards/standards/): Core language.
  - [**HTML5**](https://html.spec.whatwg.org/multipage/): DOM structuring.
  - [**CSS3**](https://www.w3.org/Style/CSS/): Design and styling.
- **Libraries**
  - [**React**](https://react.dev/): Front-end JavaScript library.
  - [**React Testing Library**](https://testing-library.com/): Component testing utilities.
  - [**React Router Library**](https://reactrouter.com/en/main): In-app navigation routing (SPA).
  - [**Styled Components Library**](https://styled-components.com/): Component-based styling library (CSS-in-JS).
  - [**prop-types**](https://github.com/facebook/prop-types): Library that provides runtime type checking for React props.
  - [**Prettier**](https://prettier.io/): Code formatter to enforce consistency.
- **Build and Dev Tools**
  - [**Vite**](https://vitejs.dev/): Build tool for faster development and optimized builds (React config).
  - [**ESLint Config Prettier**](https://github.com/prettier/eslint-config-prettier): Turns off conflicting and/or unnecessary ESLint rules for Prettier.
- **APIs and Services**
  - [**Fake Store API**](https://fakestoreapi.com/): Serves mock e-commerce data.
  - [**DALL·E 3**](https://openai.com/index/dall-e-3): Image generation.
- **Version Control and Hosting**
  - [**Git**](https://git-scm.com/): Version control and source code management.
  - [**GitHub**](https://github.com/): Remote repository hosting.
  - [**CloudFlare Pages**](https://pages.cloudflare.com/): Hosting live application preview.

## License

Copyright © 2024 Nolan Gajdascz | GitHub

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.
