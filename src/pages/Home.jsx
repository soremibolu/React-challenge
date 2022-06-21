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
        //console.log(elephants);
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
          return <Card image={elephants.image} name={elephants.name} sex={elephants.sex} note={elephants.note} id={elephants.id} />
        })}
      </div>     
    </>
  );
};

export default Home;