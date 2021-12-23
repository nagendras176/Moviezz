import React from 'react';
import styled from 'styled-components';

const Signform=styled.form.attrs({action:"http://localhost:8081/signup",method:"post"})`
width:50vh;
height:50vh;

display:flex;
flex-direction:column;
justify-content:flex-start;
margin:auto;
margin-top:10vh;

`;

const Email=styled.input.attrs({type:"email",placeholder:"Username",id:"email"})`
 width:45vh;
 height:5vh;
 border-radius:5vh;
 background:rgb(40,41,40);
 align-self:center;
 margin:1vh;
 :hover{
   border:2px solid orange;
 }

`;
const Password=styled.input.attrs({type:"password",placeholder:"Password",id:"psswd"})`
width:45vh;
height:5vh;
border-radius:5vh;
background:rgb(40,41,40);
align-self:center;
margin:1vh;
:hover{
  border:2px solid tomato;
}
`;
const ConPassword=styled.input.attrs({type:"password",placeholder:"Confirm Password",id:"confpasswd"})`
width:45vh;
height:5vh;
border-radius:5vh;
background:rgb(40,41,40);
align-self:center;
margin:1vh;
:hover{
  border:2px solid tomato;
}
`;

const Button=styled.button.attrs({type:'submit'})`
  color: palevioletred;

  font-size: 2em;

  background:rgb(40,41,40);
  margin: auto;
  margin-top:3vh;
  padding: 0.25em 1em;
  border: 2px ;
  border-radius: 2vh;
  &:hover{
    background:white;
    color:black;
  }

`;

function chkpswd()
{
  if(document.getElementById("pswd")!=document.getElementById("confpswd"))
  {
    document.getElementById("sub").disabled = true;
    console.log("chkng")
  }
  document.getElementById("sub").disabled = false;
}


function Signup()
{
  return(
    <Signform>
      <Email/>
      <Password id="pswd"/>
      <ConPassword id="confpswd"/>
      <Button id="sub" onClick={chkpswd}>Let Me Join</Button>

    </Signform>
  )
}

export default Signup;
