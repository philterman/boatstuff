const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080


app.use((req, res)=>{
    res.send('Hello from NodeLand!')
})


app.listen(port, ()=>{
    console.log(`Magic happens on port ${port}`)
})