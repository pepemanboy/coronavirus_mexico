import React, {useState, useEffect} from 'react';
import Papa from 'papaparse'
import {Line} from 'react-chartjs-2';

function App() {
  const start_date = new Date("2/26/2020");

  const confirmed_url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
  const deaths_url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv";
  const recovered_url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv";

  const [error, setError] = useState("Ok");

  const [series, setSeries] = useState({labels:[], series:[]});
  const [plotData, setPlotData] = useState({labels:[], datasets: []});

  async function getData(url) {
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

  async function getAllData() {
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
          borderColor: '#17579B',
          data: confirmed_data.data,
        },
        {
          label: 'Recuperados',
          fill: false,
          borderColor: '#67A3D2',
          data: recovered_data.data,
        },
        {
          label: 'Muertes',
          fill: false,
          borderColor: '#363537',
          data: deaths_data.data,
        },
      ]
    };
    setPlotData(data);
  }

  useEffect(()=> {
    getAllData();
  }, []);

  return (
    <div className="App">
      <Line data={plotData}/>
    </div>
  );
}

export default App;
