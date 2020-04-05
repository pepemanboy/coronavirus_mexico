import React, {useState, useEffect} from 'react';
import Papa from 'papaparse'
import {Line} from 'react-chartjs-2';
import Container from 'react-bootstrap/Container'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const start_date = new Date("2/26/2020");

  const confirmed_url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"
  const deaths_url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv";
  const recovered_url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv";

  const [plotData, setPlotData] = useState({labels:[], datasets: []});

  const getData = async (url) => {
    const response = await fetch(url);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    const results = Papa.parse(csv, {header: true});
    const rows = results.data;
    const mexico = rows.find((val, idx) => {return val["Country/Region"] === "Mexico"})
    const mexico_data = {labels:[], data: []};
    for (const key in mexico) {
      if (key.match(/\d*\/\d*\/\d*/ig)) {
        const date = new Date(key);
        if (date < start_date) continue;
        const date_str = date.getDate() + "/" +  (date.getMonth() + 1);
        mexico_data.labels.push(date_str);
        mexico_data.data.push(parseInt(mexico[key]));
      }
    }
    return mexico_data;
  }

  const getAllData = async () => {
    const confirmed_data = await getData(confirmed_url);
    const deaths_data = await getData(deaths_url);
    const recovered_data = await getData(recovered_url);

    const labels = confirmed_data.labels;

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Casos confirmados',
          fill: false,
          borderColor: '#48BEFF',
          data: confirmed_data.data,
        },
        {
          label: 'Recuperados',
          fill: false,
          borderColor: '#43C59E',
          data: recovered_data.data,
        },
        {
          label: 'Muertes',
          fill: false,
          borderColor: '#14453D',
          data: deaths_data.data,
        },
      ]
    };
    setPlotData(data);
  }

  useEffect(()=> {
    getAllData();
  });

  return (
    <div className="App">
      <Container>
        <h1 className="title">Coronavirus en México</h1>
        <Line data={plotData}/>
        <div className="footer">
          <p>Actualizado automáticamente cada 24 horas gracias a <a href="https://github.com/CSSEGISandData/COVID-19">Johns Hopkins University Coronavirus Resource Center</a>.</p>
          <p>Open source. Conoce más en <a target="_blank" rel="noopener noreferrer" href="https://github.com/pepemanboy/coronavirus_mexico/tree/master">Github</a>.</p>
        </div>
      </Container>
    </div>
  );
}

export default App;
