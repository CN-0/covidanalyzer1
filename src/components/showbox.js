import React from 'react'
import './main.css'

const Showbox = (props) =>{
  let toprint
  if(props.identity==="hi"){
      toprint = (
        <div className="header">
        <div className="headeritem">
            <h3><strong>Confirmed</strong></h3>
            <h5>[+{props.name.deltaconfirmed}]</h5>
            <h2>{props.name.confirmed}</h2>
        </div>
        <div className="headeritem">
            <h3 style={{paddingBottom:'7px'}}><strong>Active</strong></h3>
            <br/>
            <h2>{props.name.active}</h2>
        </div>
        <div className="headeritem">
            <h3><strong>Recovered</strong></h3>
            <h5>[+{props.name.deltarecovered}]</h5>
            <h2>{props.name.recovered}</h2>
        </div>
        <div className="headeritem">
            <h3><strong>Deceased</strong></h3>
            <h5>[+{props.name.deltadeaths}]</h5>
            <h2>{props.name.deaths}</h2>
        </div>
        </div>
      )
  }
  if(props.identity==="hiii"){
    toprint = (
      <div className="header">
      <div className="headeritem">
          <h3><strong>Confirmed</strong></h3>
          <h5>[+{props.name.todayCases}]</h5>
          <h2>{props.name.cases}</h2>
      </div>
      <div className="headeritem">
          <h3 style={{paddingBottom:'7px'}}><strong>Active</strong></h3>
          <br/> 
          <h2>{props.name.active}</h2>
      </div>
      <div className="headeritem">
          <h3 style={{paddingBottom:'7px'}}><strong>Recovered</strong></h3>
          <br/>
          <h2>{props.name.recovered}</h2>
      </div>
      <div className="headeritem">
          <h3><strong>Deceased</strong></h3>
          <h5>[+{props.name.todayDeaths}]</h5>
          <h2>{props.name.deaths}</h2>
      </div>
      </div>
    )
}
return(<div>{toprint}</div>)
}

export default Showbox