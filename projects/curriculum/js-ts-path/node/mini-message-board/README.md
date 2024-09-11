# Mini Message Board

_Updated as part of the The Odin Project's major NodeJS curriculum update_.

Developed as part of [The Odin Project curriculum](https://www.theodinproject.com/lessons/nodejs-mini-message-board), this project provided me with a short introduction to developing an Express application.

- **Live Preview:** [Deployed Using Railway](https://mini-message-board-production-839b.up.railway.app/)

## Learning Outcomes

- **Express**

  - Gained a base knowledge of core Express concepts such as middleware, routes, and the MVC pattern.
  - Learned basic `EJS` rendering engine syntax and capabilities.

- **Database**
  - Integrated a Postgresql database using the [`node-postgres (pg)`](https://node-postgres.com/) library.
    - Setup a local postgres installation and configured a local database.
    - Created a basic `messages` table and initialization script.
    - Implemented simple SQL queries to interact with the database.

## Challenges

The main challenge I faced was implementing, structuring, and deploying a locally developed Postgresql database.

- Structuring and organizing the database modules (queries, connection management, etc.)
- Deploying the database to Railway.
  - Previously TOP taught MongodDB which offered a more straightforward development and deployment process through MongoDB Atlas. Adjusting the nuances of Postgresql and Railway was a very valuable learning experience.
  - Specifically, I had to:
    - learn about Railway's Postgresql environment variables
    - configure/override `debug` library log fn to use the stdout stream.
      - By default debug logs to stderr which was flooding the Railway logs with false errors.
    - Initialize the database's table post build/deployment
    - Implement a /health endpoint to provide an improved user experience
      when cold-booting the Railway application.
      - Without adding the health endpoint a user would have to refresh the page
        multiple times before the app would load.

## Created With

- [**Typescript**](https://www.typescriptlang.org/): JavaScript with syntax for types.
- [**JavaScript**](https://ecma-international.org/publications-and-standards/standards/): Compiled by Typescript.
- [**HTML5**](https://html.spec.whatwg.org/multipage/): DOM structuring.
- [**CSS**](https://www.w3.org/Style/CSS/Overview.en.html): Styling.
- [**Node.js**](https://nodejs.org/en): Javascript runtime environment.
- [**Express**](https://expressjs.com/): Node web framework.
- [**Railway**](https://railway.app/): Web host and streamlined application deployment.
- [**Git**](https://git-scm.com/): Version control and source code management.
- [**GitHub**](https://github.com/): Remote repository hosting.
