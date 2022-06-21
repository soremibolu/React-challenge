import React, {useEffect} from 'react';
import axios from "axios";
//const filterCategory=data.filter(fCategory=>fCategory.category_id===1);

export const Details = () => {
const id = props.match.params.id;
console.log(id);


return (
    <>
      <h1>Elephants</h1>
    </>
  );
};

export default Details;