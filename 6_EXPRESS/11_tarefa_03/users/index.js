const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname,'../templates')

router.get('/add',(req,res)=>{
    res.sendFile(`${basePath}/add.html`)
})

router.get('/produtos',(req,res)=>{
    res.sendFile(`${basePath}/produts.html`)
})

router.post('/save',(req,res)=>{
    console.log(req.body)
    const produts = req.body.produts
    console.log(`Produto desejado:${produts}`)
    res.sendFile(`${basePath}/produts.html`)
})

router.get('/:id',(req,res)=>{
    const  id = req.params.id

    console.log(`Usuario:${id}`)
    res.sendFile(`${basePath}/users.html`)
})

router.get('/',(req,res)=>{
    res.sendFile(`${basePath}/users01.html`)
})



module.exports = router