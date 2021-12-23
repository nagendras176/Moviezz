import React from 'react'
import styled from 'styled-components'

const Cardcontainer=styled.div`
display:flex;
height:30vh;
width:40vh;
flex-direction:column;
background-color:transperent;
 justify-content:center;

 justify-content:center;

`;
//src:"https://image.tmdb.org/t/p/w500/hziiv14OpD73u9gAak4XDDfBKa2.jpg"
const Movimg=styled.img.attrs((props)=>{return(
  {
    src:"https://image.tmdb.org/t/p/w500"+props.url
  }
)})`
 height:20vh;
 width:35vh;
 align-self:center;
`;

const Title=styled.p`
color:white;
align-self:center;
`;

function Moviecard(props) {

return(

  <Cardcontainer>
    <Movimg url={props.data["backdrop_path"]}/>
    <Title>{props.data["original_title"]}</Title>
  </Cardcontainer>

)
}

export default Moviecard;
