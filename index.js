const express = require('express')
require('dotenv').config()
//or
//import express from "express"
const app = express();//express ki saari functionality app me aagyi
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("clumsyshots")
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/instagram',(req,res)=>{
    res.send('<h2>Clumsy Shots</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
