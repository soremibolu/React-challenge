import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import dummyData from "../dummyData.json"; // To be replaced with your api response data
import axios from "axios";


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
  }, [elephants]);

  return (
    <>
      <h1>Elephants</h1>
      <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
        {elephants.map((elephant) => {
          return <Card image={elephant.image} name={elephant.name} sex={elephant.sex} note={elephant.note} id={elephant.id} />
        })}
      </div>     
    </>
  );
};

export default Home;