import React from 'react';
import styled from 'styled-components';
import Signin from './Signin.js';
import Signup from './Signup.js';
import {Link,Outlet} from 'react-router-dom'

const MainContainer=styled.div`
display:flex;
background:rgba(255,255,255,0.15);
align-items:center;
flex-direction:column;
border:2px solid white;
border-color:rgb(195,169,253);
height:80vh;
width:60vh;
margin:auto;
margin-top:15vh;
border-radius:3vh;


`;

const LogSign=styled.div`
display:flex;
width:50vh;
border: 2px white;
flex-direction:row;
align-items:space-around;

`;

const Button=styled.button`
  color: palevioletred;

  font-size: 2em;

  background:rgb(40,41,40);
  margin: auto;
  margin-top:3vh;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 2vh;
`;


function Login()
{
  return(
   <MainContainer>
     <LogSign>
      <Link to="/Login/Signin" style={{marginRight:'auto'}}><Button>Sign In</Button></Link>
     <Link to="/Login/Signup" ><Button>Sign Up</Button></Link>
     </LogSign>
    <Outlet/>
   </MainContainer>
  )
}

export default Login;
