import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import axios from "axios";
import Title from '../components/Title';




export const Home = () => {
  const [elephants, setElephants] = useState([]);

  useEffect(() => {
    axios
      .get(`https://elephant-api.herokuapp.com/elephants`)
      .then((res) => {
        setElephants(res.data);
        })
      .catch((err) => {
        console.log(err);
      });
  }, [setElephants]);


  return (
    <>
      <Title>Elephants</Title>
      <div className="App">
        {elephants.slice(0, 10).map((elephant) => {
          return <Card image={elephant.image} name={elephant.name} sex={elephant.sex} note={elephant.note} id={elephant._id} />
        })}
      </div>     
    </>
  );
};

export default Home;