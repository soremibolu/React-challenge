import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Cardcover = styled.div`
width:350px ;
height: 450px;
display:inline-block;
background-color:white;
background-position:center;
background-size:cover;
border:1px solid lightgrey;
border-radius: .2rem;
box-shadow: 10px 10px 5px lightgrey;
margin-bottom:2rem;

  .port-details{
    width:100%;
    height:50%;


    .portimage{
        width:100%;
        height:100%;
    }
  }
  .details{
    h1,h2,p{
      margin: 10px 10px;
    }
    p{
      font-size:14px
    }
    h2{
      font-size:16px;
      color:darkgrey;
    }
  }
}
`;



/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * 
 * @param props 
 * @returns 
 * 
 */



const Card = (props) => {
  const {id,image, name, sex, note} = props;
  return (
    <>
      <Cardcover>
      <Link to={`/property/${id}`} style={{color:'black', textDecoration: 'none'}}>
        <div className="port-details">
              <div className="portimage" style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>   
        </div>
        <div className="details">
          <h1>{name}</h1>
          <h2>Sex: {sex}</h2>
          <p>{note}</p>
        </div>
        
      </Link>
      </Cardcover>
    </>
  )
}

export default Card