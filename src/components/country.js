import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Show from './show'
import Showbox from './showbox'
import Geomap from './geomap'
import Navbarmenu from './navbar'
import './main.css'
import './bootstrap.css'

const Country = props => {
  const [world, setWorld] = useState([])
  const [countrywiseList, setCountrywiseList] = useState([])
  const[loading, setloading] = useState(true)

  useEffect(() => {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries').then(result => {
      setloading(false)
      let countrywiseData = result.data
      let worldData = countrywiseData.splice(0,1)
      setCountrywiseList(countrywiseData);
      setWorld(worldData)
    });
  }, []);
  
  
  return(
    <div>
      <Navbarmenu />
      <div className="main">
      {loading?<h2 style={{textAlign:'center',color:'red'}}>loading...</h2>:null}
      <Geomap data={countrywiseList} />
      {world.map(total => (
          <Showbox key={total.country} identity="hiii" name={total}/>
          ))}
        <h2 style={{textAlign:'center',marginTop:'5px'}}><strong>Countrywise Stats</strong></h2>
        <div className="head">
          <div className="headitem1"><strong>Country</strong></div>
          <div className="headitem"><strong>Confirmed</strong></div>
          <div className="headitem"><strong>Active</strong></div>  
          <div className="headitem"><strong>Recovered</strong></div>
          <div className="headitem"><strong>Deceased</strong></div>
        </div>   
          {world.map(total => (
          <Show key={total.country} name={total}/>
          ))} 
          {countrywiseList.map(total => <Show key={total.country} identity="hiii" name={total} />)}
    </div>
    </div>
  )
}

export default Country