import React, { useState, useEffect } from "react"
import axios from 'axios'
import Show from './show'
import Navbarmenu from './navbar'
import './main.css'
import './bootstrap.css'
import Selectform from './selectform'
import Districtchart from './districtchart'

const District = (props) =>{
    const [districtList, setDistrictList] = useState([]);
    const [district, setdistrict] = useState()
    const [type, settype] = useState("confirmed")
    const[loading, setloading] = useState(true)
    const id=props.match.params.id
    useEffect(() => {
        axios.get('https://api.covid19india.org/v2/state_district_wise.json').then(districtResult => {
          setloading(false)
          let districtwiseData = districtResult.data
          districtwiseData.forEach(states=>{
            if(states.state === id){
              let districtData = states.districtData;
                districtData.sort(function(a,b){return b.confirmed-a.confirmed})
                setDistrictList(districtData)
                setdistrict(districtData[0].district)
            }})
        });        
      }, [id])

    const handleChange = (event) =>{
       settype(event.target.value)
    }
    const handleChanger = (event) =>{
        setdistrict(event.target.value)
    }
    return(
      <div>
        <Navbarmenu />
        <div className="main">
        {loading?<h2 style={{textAlign:'center',color:'red'}}>loading...</h2>:null}
        <h2 style={{textAlign:'center',marginTop:'5px'}}><strong>{props.match.params.id}  Districtwise Stats</strong></h2>
        <div className="head">
          <div className="headitem1"><strong>District</strong></div>
          <div className="headitem"><strong>Confirmed</strong></div>
          <div className="headitem"><strong>Active</strong></div>  
          <div className="headitem"><strong>Recovered</strong></div>
          <div className="headitem"><strong>Deceased</strong></div>
        </div>   
        {districtList.map(total => <Show key={total.district} identity="hii" name={total} />)}
        <h2 style={{textAlign:"center",position:"relative",marginTop:"25px",zIndex:"100",color:"green"}}>Daily spread trends</h2>
        <div style={{display:"block"}}>
          <div style={{position:"relative", width:"300px",display:"inline-block",marginLeft:"100px",zIndex:"100"}}>< Selectform district={district} districtList={districtList} handleChanger={handleChanger} /></div>
          <div style={{position:"relative", width:"300px",display:"inline-block",zIndex:"100"}}>< Selectform type={type} handleChange={handleChange} /></div>
        </div>
        <div style={{marginTop:"-60px"}}><Districtchart state={id} type={type} district={district} /></div>
        
      </div>
      </div>
    )
}

export default District