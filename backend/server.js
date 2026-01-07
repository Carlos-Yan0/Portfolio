const express = require('express');
const cors = require('cors');
const App = express();
const router = require('./routes/routes');
const con = require('./config/db');

con();
App.use(cors());
App.use(express.json());

App.use("/", router);

App.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});