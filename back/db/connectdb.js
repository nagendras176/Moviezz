const mongoose=require('mongoose');
const mongo_url=process.env.MONGODB_CONNECTIONSTRING;

const connect=mongoose.connect(mongo_url,{useNewUrlParser: true,useUnifiedTopology: true})
console.log("dbconnect")
connect.then(db=>{
  console.log(`DATA BASE IS CONNECTED WITH ${mongo_url}`);
}).catch((err)=>{
  console.log('DATABASE CONNECTION FAILED')
  console.log(err)
})
