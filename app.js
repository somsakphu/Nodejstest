const express = require('express');
const debug = require('debug');
const morgan = require('morgan')
const app = express();
const port = 2500; 
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));
app.get("/",(req,res)=>{

    res.send('hello 112 ');
})

app.listen(port,()=>{
    debug("Listening on port %d",port);
})