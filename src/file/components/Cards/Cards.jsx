
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Global</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Positif"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Jumlah yang terkonfirmasi positif COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Sembuh"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Jumlah yang sembuh dari COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Meninggal"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Jumlah yang meninggal karena COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;