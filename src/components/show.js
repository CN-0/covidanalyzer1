import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Red from '../assets/images/red.png'
import Green from '../assets/images/green.png'
import './main.css'
import {Link} from 'react-router-dom'

const Show = (props) => {
  const[zones,setzones] = useState({})
  useEffect(()=>{
    if(props.identity==="hii"){
      axios.get('https://api.covid19india.org/zones.json').then(zoneResult => {
        const zonedata = zoneResult.data.zones
        zonedata.forEach(zone=>{
          if(zone.district===props.name.district){
               setzones(zone)   
          }
        })
      });
    }
  },[props.identity,props.name.district])
  let toprint
  if(props.identity==="hi"){
      toprint = (
        <div className="head">
          <div className="headitem12"><Link to={'/state/'+ props.name.state}>{props.name.state}</Link></div>
          <div className="headitem2" >{props.name.confirmed}<span><img style={{width : "8px", height:"12px"}} src={Red} alt='↑'/></span>{props.name.deltaconfirmed}</div>
          <div className="headitem2" >{props.name.active}</div>  
          <div className="headitem2" >{props.name.recovered}<span><img style={{width : "8px", height:"12px"}} src={Green} alt='↑'/></span>{props.name.deltarecovered}</div>
        <div className="headitem2">{props.name.deaths}<span><img style={{width : "8px", height:"12px"}} src={Red} alt='↑'/></span>{props.name.deltadeaths}</div>
    </div>
      )
  }
  if(props.identity==="hii"){
    let color
    if(zones.zone==="Red"){
      color = {backgroundColor:'rgb(255, 115, 115,0.7)'}
    }
    if(zones.zone==="Orange"){
      color = {backgroundColor:'rgb(255, 167, 66,0.7)'}
    }
    if(zones.zone==="Green"){
      color = {backgroundColor:'rgb(179, 252, 119,0.7)'}
    } 
    toprint=(
        <div className="head">
          <div style={color} className="headitem12">{props.name.district}</div>
          <div style={color} className="headitem2">{props.name.confirmed}<span><img style={{width : "8px", height:"12px"}} src={Red} alt='↑'/></span>{props.name.delta.confirmed}</div>
          <div style={color} className="headitem2">{props.name.active}</div>  
          <div style={color} className="headitem2">{props.name.recovered}<span><img style={{width : "8px", height:"12px"}} src={Green} alt='↑'/></span>{props.name.delta.recovered}</div>
          <div style={color} className="headitem2">{props.name.deceased}<span><img style={{width : "8px", height:"12px"}} src={Red} alt='↑'/></span>{props.name.delta.deceased}</div>
        </div>
    )
  }
  if(props.identity==="hiii"){
    toprint=(
        <div className="head">
          <div className="headitem12">{props.name.country}</div>
          <div className="headitem2" >{props.name.cases}<span><img style={{width : "8px", height:"12px"}} src={Red} alt='↑'/></span>{props.name.todayCases}</div>
          {props.name.active!==null?<div className="headitem2" >{props.name.active}</div>:<div className="headitem2">Unknown</div>  }
          {props.name.recovered!==null?<div className="headitem2" >{props.name.recovered}</div>:<div className="headitem2">Unknown</div>  }
          <div className="headitem2">{props.name.deaths}<span><img style={{width : "8px", height:"12px"}} src={Red} alt='↑'/></span>{props.name.todayDeaths}</div>
        </div>
    )
  }

return (
<div>
  {toprint}
</div>
) } 


export default Show