import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "../Card"

const Indonesia =()=> {
  const [indo, setIndo] = useState({confirm:[0],death:[0],recovered:[0]})

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setIndo(
          {
            confirm: res.data.jumlahKasus,
            death: res.data.meninggal,
            recovered: res.data.sembuh
          })
      })
      .catch((err) => console.log(err))
  })

  
  return (
    <div className='container'>
      <center>
      <h1>INDONESIA</h1>
      
      <br/>
      <Card 
      confirm={indo.confirm}
      recovered={indo.recovered}
      death={indo.death} />
      </center>
    </div>
  );
}

export default Indonesia;