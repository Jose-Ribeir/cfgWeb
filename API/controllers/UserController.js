const client = require('../connection.js')
const express = require('express');
const app = express();

app.listen(5000, ()=>{
    console.log("Sever is now listening at port 5000");
})

client.connect();

app.get('/api/users', (req, res)=>{
    client.query(Select * from, users, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})