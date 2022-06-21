import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Cardcover = styled.div`
float:left;
width:350px ;
height: 450px;
display:inline-block;
background-color:white;
border:1px solid lightgrey;
border-radius: .2rem;
box-shadow: 10px 10px 5px lightgrey;
margin-bottom:2rem;
margin-left:10px;

  .port-details{
    width:100%;
    height:50%;


    .portimage{
        width:100%;
        height:100%;
        background-position:center;
        background-size:cover;
    }
  }
  .details{
    width:100%;
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


const Card = (props) => {
  const {id,image, name, sex, note} = props;
  return (
    <>
      <Cardcover>
      <Link to={`/details/${id}`} style={{color:'black', textDecoration: 'none'}}>
        <div className="port-details">
              <div className="portimage" style={{backgroundImage: `url(${image})`}}></div>   
        </div>
        <div className="details">
          <h1>{name}</h1>
          <p>{note}</p>
          <h2>Sex: {sex}</h2>
        </div>
        
      </Link>
      </Cardcover>
    </>
  )
}

export default Card;