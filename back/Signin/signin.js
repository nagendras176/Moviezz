const express=require('express')
const router=express.Router()


router.use((req,res,next)=>{
    next()
})


router.post('/',(req,res)=>{
  console.log(req.body)
  res.send('sucess')
})



module.exports=router;
