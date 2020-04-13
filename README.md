# PEAN Full Stack API Display

* PostgreSQL Express Angular Node (PEAN) full-stack app, integrates Angular frontend with Node.js backend. Show a collection of API data.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

### Backend

* PostgreSQL needs to be installed and running - I started it from my Windows 10 PostgreSQL 12 dropdown option 'SQL shell (psql)'
* Postman used to test the backend before frontend was available
* Postgresql shell commands: `\l` list all databases. `\c database1` connect to database1. `\dt` inspect tables. `\q` to quit.

### Frontend

* Angular frontend includes a ..

## Screenshots

![Backend screenshot](./img/postgresql.png)
![Frontend screenshot](./img/angular.png)

## Technologies - Backend

* [PostgreSQL v12.2](https://www.postgresql.org/)
* [PostgreSQL Installer for Windows](https://www.postgresqltutorial.com/install-postgresql/)
* [Express.js middleware v4.17.1](https://expressjs.com/)
* [Node.js v12.4.0](https://nodejs.org/es/)
* [Nodemon](https://www.npmjs.com/package/nodemon) npm module so backend server will automatically restart after code changes

## Technologies - Frontend

* [Angular framework v9.0.5](https://angular.io/)
* [Angular Universal](https://angular.io/guide/universal) Server-Side Rendering(SSR) by a Node Express web server
* [Bootstrap v4.4.1](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/) icons
* [jQuery](https://jquery.com/download/)
* [Angular Express Engine](https://www.npmjs.com/package/@nguniversal/express-engine) for running Angular Apps on the server for server side rendering

## Setup - Backend

* Change to `/backend` directory
* Install dependencies using `npm i`
* Install [nodemon v2.0.2](https://www.npmjs.com/package/nodemon) globally if you don't already have it
* Install [PostgreSQL](https://www.postgresql.org/) & run it (requires the password you created during installation)
* Add postgresql database & any API access credentials to .env file
* Run `nodemon server` for a dev server on port 5000

## Setup - Frontend

* Change to `/client` directory
* Install dependencies using `npm i`.
* Run `npm start`. Frontend will open at `http://localhost:3000/`

## Setup - Full stack

* From top level `\pern-stack-api-display` run `npm run dev` for a dev server on port 5000 and a React fontend at `http://localhost:3000/`

## Code Examples - Backend

* f

```javascript

```

## Code Examples - Frontend

* f

```javascript

```

## Features - Backend

* All data stored in PostgreSQL database that can also be viewed and changed from the PostgreSQL shell (psql)

## Features - Frontend

* [Versión 81.0.4044.92 (Build oficial) (64 bits)](https://www.google.com/chrome/) latest version was required to e2e testing to work

## Status & To-Do List

* Status: in dev
* To-Do: complete

## Inspiration/General Tools

* [PostgreSQL Quick Command List](http://jcsites.juniata.edu/faculty/rhodes/dbms/pgsql.htm)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
