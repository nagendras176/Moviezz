
 function  SignupFormCheck(data)
{
  if(data["Email"] && data["Password"] && data["Confirm_Password"]) return ([data["Email"],data["Password"]])
  else return false;
}


module.exports=SignupFormCheck;
