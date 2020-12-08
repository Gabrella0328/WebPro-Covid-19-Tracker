import axios from "axios";
import Card from "../Card";
import React, { useState, useEffect } from "react";

const Country = ({ match }) => {
  const [country, setCountry] = useState({
    confirm: [0],
    death: [0],
    recovered: [0],
  });

useEffect(() => {
  axios
    .get(`https://covid19.mathdro.id/api/countries/${match.params.id}`)
    .then((res) => {
      setCountry({
        confirm: res.data.confirmed.value,
        death: res.data.deaths.value,
        recovered: res.data.recovered.value,
      });
    })
    .catch((err) => console.log(err));
  });

return (
  <div className="container">
  <h2>{match.params.id} Kasus</h2>
    <Card
      confirm={country.confirm}
      recovered={country.recovered}
      death={country.death}
    />
  </div>
  );
};
export default Country;