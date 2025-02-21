import express, { urlencoded } from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const app=express()


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.send("hello world")
})
app.get('/profile/:username', function(req, res){
    res.send(`welcome ${req.params.username}`)
})
app.get('/profile/:username/:age', function(req, res){
    res.send(`welcome ${req.params.username} with age: ${req.params.age}`)
})

// app.get('/', function(req, res){
//     res.render('index')
// })


app.listen(3000)