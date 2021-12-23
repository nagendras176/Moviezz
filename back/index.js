const express=require('express');
require('dotenv');
var bodyParser = require('body-parser')
if(process.env.NODE_ENV!="production")
{
  require('dotenv').config();
}

require('./db/connectdb');
const sign=require('./Signin/signin')
const signp=require('./Signup/signup')


app=express();
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
  res.send("working");
});

app.use('/signin',sign)
app.use('/signup',signp)


app.listen(process.env.BACKEND_PORT||8081,()=>{
  console.log("Moviezz backend is running")
})
