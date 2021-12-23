const mongoose=require('mongoose')

const jwt=new mongoose.Schema(
{
  token:{
    type:String,
    required:true,
  },
  userid:{
    type:String,
    required:true,
  }

})

const user=new mongoose.Schema(
  {
    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true,
    }
  }
)

const playlists=new mongoose.Schema(
  {
    listid:{
      type:String,
      required:true
    },
    userid:{
      type:String,
      required:true
    }
  })


module.exports={"JWT":new mongoose.model('JWT',jwt),"user":new mongoose.model('user',user),"list":new mongoose.model('playlist',playlists)}
