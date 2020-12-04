import React from 'react';
import { Cards, CountryPicker, Chart } from './indonesia/components';
import { fetchData } from './indonesia/api/';
import styles from './indonesia/App.module.css';


class App extends React.Component {
  state = {
    data: {},
    dataCountry: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ dataCountry: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      
      <div className={styles.container}>
        
        <h1><font size = "7">Covid-19 Tracker</font><hr/></h1>
        <h3>Pilih Negara : </h3>

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {country && <h3>Negara : {country}</h3>}
        {country && <Cards data={this.state.dataCountry} />}
        <Cards data={data} />
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}
export default App;