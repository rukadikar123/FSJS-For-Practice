import express from 'express'

const app=express()

app.use(function(req,res,next){
    console.log('middleware added');
    next()
})

app.get('/', (req, res)=>{
    res.send('hello brothers')
})

app.get('/profile', (req, res)=>{
    res.send('profile page')
})

app.listen(3000 , ()=>{
    console.log("app is running on 3000 port");
    
})