import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";

const Global = () => {
  const [world, setWorld] = useState({confirm:NaN,death:NaN,recovered:NaN})

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
      <h2>Global</h2>
      < br/>
      <Card confirm={world.confirm} recovered={world.recovered} death={world.death} />
    </div>
    </center>
  );
  
};

export default Global;