# MERN template project

## Introduction
This project is a template for building fullstack JavaScript applications running on node.js. The technology stack is as follows:
- Both FE & BE are in the same repo.
- Separate package.json for FE & BE.
- One root level package.json
- ESLint & Prettier added.
- **React** for the front-end, bootstrapped with "Create React App".
- **express.js** for the server
  - Serves the React app 
  - Provides the JSON API for the React app using http
- MongoDB is integrated into the server app.


The app is fully deployable to any PaaS like Heroku or AWS Elastic Beanstalk that understands how to build and run projects with a **package.json** file. 

## Commands
The package.json provides all the commands needed to test and run this application.
- **npm install** install all dependencies for the server and the client.
- **npm run build** builds the static files for the React app.
- **npm start** starts the complete MERN app.
- **npm run react-dev** starts the React app in development mode on http://localhost:3000. Only works if the server is started separately. Alternatively you can just use `npm start` from the client folder.

## Development
Use this template to build your own apps. Since the React app is build using Create React App, you can easily update the React version.

During development of the React app, use **npm run react-dev** or simply navigate to the client folder and run **npm start**. Remember you need the server running as well for it to work.

Before deploying, build and start the app, and test that everything works on http://localhost:4000. The react app should open when you visit http://localhost:3000 in the browser and the API should be available on http://localhost:4000/api/.

## Configuration
The app opens on port 4000 by default. If the environment variable **PORT** is set, that port will be used instead.

In production mode, the React app expects to find the API on the same port as itself on the `/api` path. In development mode, the React app expects to find the api on http://localhost:3000/api/ instead. You can change this behaviour in the React `.env` files.

## Server implementation
It's worth noting that a few tricks are used in the server implementation to concurrently serve the http REST API and the React app.

By default when the express.js server receives a request, it tries to match it with one of the API routes. If none matches it serves one of the static files instead. If none of those matches it serves the React index.html file. This enables client-side routing in the React app (with React Router or similar library) without overriding the server API or hiding any of the other static assets.

Relevant code snippets from `server.js`:
```js
  // Serve the static files
  app.use(express.static(path.resolve('..', 'client', 'build'))); 
```

```js
  // "Redirect" all non-API GET requests to React's entry point (index.html)
  app.get('*', (req, res) =>
    res.sendFile(path.resolve('..', 'client', 'build', 'index.html'))
  );
```
