/** ** Node.js libraries **** */
const path = require('path');

/** ** External libraries *** */
const express = require('express');

const db = require('./db');

/** ** Configuration *** */
require('dotenv').config({ path: path.resolve(__dirname, '.env.development') });

const app = express();
const port = process.env.PORT || 4000;
const api = require('./src/api');

db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
}).then(() => {
    app.use('/api', api);

    // Handle non-api routes with static build folder
    app.use(express.static(path.resolve(__dirname, '../client/build')));

    // Return index.html for routes not handled by build folder
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });

    // Start listening on port
    app.listen(port, () => {
        console.log(`Server listening at port: ${port}`);
    });
});
