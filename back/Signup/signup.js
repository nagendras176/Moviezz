const express=require('express')
const bodyParser=require('body-parser')
const router=express.Router()
const db_models=require('../db/model')
const SignupFormCheck=require('../utils/signupchk')

router.post('/',(req,res)=>
{
    //check if form structure is correct
    let data=SignupFormCheck(req.body)
    if(!data)
    {
      res.status(400).json({"msg":"dont interact witout frontend"})
    }
    //check if email pre exists
    db_models["user"].findOne({"email":data[0]}).then(query=>{
      if(query==null)
      {
        //email not pre registered
        db_models["user"].create({"email":data[0],"password":data[1]})
        res.status(201).json({"msg":"account creates sucessfully"})
      }
      else {

         res.statusCode=409;
         res.json({"msg":"email already exists"})
      }
    })




})

module.exports=router;
