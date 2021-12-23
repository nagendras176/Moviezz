const express=require('express')
const bodyParser=require('body-parser')
const router=express.Router()

router.use(bodyParser.json(),(req,res,next)=>{
  next()
});


router.post('/',(req,res)=>{
  console.log(req.body);
  res.send("signup working")
})


module.exports=router;
