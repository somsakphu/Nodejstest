const express = require('express');
const debug = require('debug');
const morgan = require('morgan')
const app = express();
const port = 2500; 


app.use(morgan('combined'));
app.get("/",(req,res)=>{

    res.send('hell ');
})

app.listen(port,()=>{
    debug("Listening on port %d",port);
})