import React,{useState,useEffect} from 'react'
import ZingChart from 'zingchart-react'

const Statebar = (props) =>{
    const [countryList, setCountryList] = useState({})
    useEffect(()=>{
        if (props.data.length >0 ){
            let xaxis=[]
            let yaxis = []
            props.data.forEach(date=>{
               xaxis.push(date.date)
               yaxis.push(Number(date.totalconfirmed))
            })
            setCountryList({
            config: {
                "type": 'bar',
                "title":{"text":"Daily spread trends",fontColor: 'green',marginTop:'25px'},
                "tooltip": {
                    "text": "%scale-key-text: %v",
                    "backgroundColor":"white",
                    "color":"blue"
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
                values: yaxis
                }]
            }
            })
        }
        
    },[props])

    return(<div>
        <ZingChart data={countryList.config}/>
    </div>)
}

export default Statebar