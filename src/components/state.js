import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Show from './show'
import Showbox from './showbox'
import Statebar from './statebar'
import Hbar from './hbar'
import Navbarmenu from './navbar'
import './main.css'
import './bootstrap.css'

const State = props => {
  const [country, setCountry] = useState([])
  const [statewiseList, setStatewiseList] = useState([])
  const[loading, setloading] = useState(true)
  const [barList, setBarList] = useState([])

  useEffect(() => {
    axios.get('https://api.covid19india.org/data.json').then(result => {
      setloading(false)
      let statewiseData = result.data.statewise
      let barData = result.data.cases_time_series
      let countryData = statewiseData.splice(0,1)
      setStatewiseList(statewiseData)
      setCountry(countryData)
      setBarList(barData)
    });
  }, []);
  
  return(<div>
    <Navbarmenu/>
    <div className="main">
    <Hbar />
    {loading?<h2 style={{textAlign:'center',color:'red'}}>loading...</h2>:null}
        {country.map(total => (
          <Showbox key={total.state} identity="hi" name={total}/>
          ))}
          <h2 style={{textAlign:'center',marginTop:'5px'}}><strong>Statewise Stats</strong></h2>
        <div className="head">
          <div className="headitem1"><strong>State</strong></div>
          <div className="headitem"><strong>Confirmed</strong></div>
          <div className="headitem"><strong>Active</strong></div>  
          <div className="headitem"><strong>Recovered</strong></div>
          <div className="headitem"><strong>Deceased</strong></div>
        </div>    
          {statewiseList.map(total => <Show key={total.state} identity="hi" name={total} />)}
          <Statebar data={barList} />
    </div>
    </div>
  )
}

export default State