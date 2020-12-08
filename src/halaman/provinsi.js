import axios from 'axios'
import Table from '../table'
import React, { useState, useEffect } from 'react'

const Provinsi =()=> {
  const [prov, setProv] = useState([])
  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((res) => {
    setProv(res.data.data)
    })
    .catch((err) => console.log(err))
  })
return (
  <div className='container'>
    <center>
    <h1>Provinsi di Indonesia</h1>
    <h3>Jumlah kasus setiap provinsi di Indonesia</h3>
    <div className='container'>
      <Table prov={prov} />  
    </div>
    </center>
  </div>
  );
}

export default Provinsi;