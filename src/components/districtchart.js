import React,{useState,useEffect} from 'react'
import ZingChart from 'zingchart-react'
import axios from 'axios'

const Districtchart = (props) =>{
    const [districtsDaily, setDistrictsDaily] = useState({})
    const [loading, setloading] = useState(true)
    const [bardata, setbardata] = useState({})

    useEffect(()=>{
        axios.get('https://api.covid19india.org/districts_daily.json').then(result => {
            const dailyData = result.data.districtsDaily
            setDistrictsDaily(dailyData)
            setloading(false)
            
        })
    },[])
    useEffect(()=>{
        if(!loading){
                let color
                let state=props.state
                let district = props.district
                let type = props.type
                if(type==="confirmed"){
                   color="red"
                }else if(type==="active"){
                  color="blue"
                }else if(type==="recovered"){
                    color="green"
                }else{
                    color="grey"
                }
                let xaxis=[]
                let yaxis = []
                districtsDaily[state][district].forEach(day=>{
                    xaxis.push(day.date)
                    yaxis.push(day[type])
                })                
                setbardata({
                config: {
                    "type": 'bar',
                    "tooltip": {
                        "text": "%scale-key-text: %v",
                        "backgroundColor":"white",
                        "color":"black"
                      },
                    "scale-x":{
                        "values":xaxis
                    },
                    "plot": {
                        "animation": {
                          "delay": "10",
                          "effect": "4",
                          "method": "5",
                          "sequence": "4"
                        }
                      },
                    "series": [{
                    values: yaxis,
                    backgroundColor: color
                    }]
                }
                })
        }
        
    },[props,loading,districtsDaily])

    return(<div>
        {bardata.config?<ZingChart data={bardata.config} />:null}
    </div>)
}

export default Districtchart