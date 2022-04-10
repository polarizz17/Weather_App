//veriable declair
const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;


//path declair
const static_path = path.join(__dirname,'../public')
const template_patha = path.join(__dirname,'../templates/views')
const partials_path = path.join(__dirname,'../templates/partials')

//view engine
app.set('view engine', 'hbs');
app.set('views',template_patha);

//partials declair
hbs.registerPartials(partials_path);

//public statitc path
app.use(express.static(static_path));


//Routing
app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/about",(req,res)=>{
    res.render('about');
});
app.get("/weather",(req,res)=>{
    res.render('weather');
});
app.get("*",(req,res)=>{
    res.render('404');
});



app.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})