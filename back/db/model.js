const mongoose=require('mongoose')

const jwt=new mongoose.Schema({userid:String,jwt_token:String})
const user=new mongoose.Schema({email:String,password:String})
const playlists=new mongoose.Schema({userid:String,list:Array})
