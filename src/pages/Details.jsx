import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Title from '../components/Title';


const Detailscover = styled.div`
img{
    height:350px;
    margin:20px;
}

h1,p{
    margin:20px
}
`;


export const Details = () => {
const { id } = useParams();

const [elephant, setElephant] = useState([]);

  useEffect(() => {
    axios
      .get(`https://elephant-api.herokuapp.com/elephants`)
      .then((res) => {
          const edetails = res.data
          const elephantdetails = edetails.filter(elephant=>elephant._id===id);
          setElephant(elephantdetails[0]);

        })
      .catch((err) => {
        console.log(err);
      });
  }, [setElephant]);


return (
    <>
    <Detailscover>
      <img src={elephant.image} />
      <Title>{elephant.name}</Title>
      <p>{elephant.note}</p>
      <p>Sex: {elephant.sex}</p>
      <p>Species: {elephant.species}</p>
      <p>Affiliation: {elephant.affiliation}</p>
    </Detailscover>
    </>
  );
};

export default Details;