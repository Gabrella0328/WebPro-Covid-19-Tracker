import axios from "axios";
import Card from "../Card";
import React, { useState, useEffect } from "react";

const Keseluruhan = () => {
  const [world, setWorld] = useState({confirm:[0],death:[0],recovered:[0]})
  useEffect(() => {
    axios
    .get("https://covid19.mathdro.id/api")
    .then((res) => {
      setWorld({
        confirm:res.data.confirmed.value,
        death:res.data.deaths.value,
        recovered:res.data.recovered.value
      });
    })
    .catch((err) => console.log(err));
  });
  return (
    <center>
      <div className="container">
      <br/>
      <h1>GLOBAL</h1>
      <h3>Berikut Jumlah kasus secara global : </h3>
      < br/>
      <Card confirm={world.confirm} recovered={world.recovered} death={world.death} />
    </div>
    </center>
  );
  
};

export default Keseluruhan;