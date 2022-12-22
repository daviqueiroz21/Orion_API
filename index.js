const express = require('express');
const router = require('./src/router/router');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors('*'));
app.use(router)


app.listen(3000,()=> console.log('listening on'));