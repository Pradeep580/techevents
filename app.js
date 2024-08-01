const express = require('express')
const expresslayouts =require('express-ejs-layouts');
const app = express();

app.use(express.static('public'))
app.use(express.urlencoded( {extended: true}));
app.use(expresslayouts)

app.set('layout','./layout/main')
app.set('view engine','ejs')

const router = require("./server/routers/router");
app.use(router);

app.listen(3001,()=> console.log('http://localhost:3001'));

