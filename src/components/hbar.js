import React,{useState,useEffect} from 'react'
import axios from 'axios'
import RacingBarChart from "./RacingBarChart";
import useInterval from "./useInterval";

const Hbar=()=>{
    const [numbers, setnumbers] = useState({
        "Andhra Pradesh" : 0,    
        "Arunachal Pradesh" : 0,
        "Assam" : 0,
        "Bihar" : 0,
        "Chhattisgarh" : 0,
        "Goa" : 0,
        "Gujarat" : 0,
        "Jammu and Kashmir":0,
        "Haryana" : 0,
        "Himachal Pradesh" : 0,
        "Jharkhand" : 0,
        "Karnataka" : 0,
        "Kerala" : 0,
        "Madhya Pradesh" : 0,
        "Maharashtra" : 0,
        "Manipur" : 0,
        "Meghalaya" : 0,
        "Mizoram" : 0,
        "Nagaland" : 0,
        "Odisha" : 0,
        "Punjab" : 0,
        "Rajasthan" : 0,
        "Sikkim" : 0,
        "Tamil Nadu" :0,
        "Telangana" : 0,
        "Tripura" : 0,
        "Uttarakhand" : 0,
        "Uttar Pradesh" : 0,
        "West Bengal" : 0,
        "Andaman and Nicobar Islands" : 0,
        "Chandigarh" : 0,
        "Dadra and Nagar Haveli" : 0,
        "Daman and Diu": 0,
        "Delhi" :0,
        "Ladakh" : 0 ,
        "Lakshadweep" : 0,
        "Puducherry" : 0   
    })
    const [statesList, setStatesList] = useState([])
    const [dat,setdat] = useState([])
    const [count,setcount]=useState(0)
    useEffect(()=>{
        axios.get('https://api.covid19india.org/states_daily.json').then(result=>{
            let confirmedList=[]
            
            result.data.states_daily.forEach(status=>{
                if(status.status==="Confirmed"){
                   delete status.date
                   delete status.tt
                   delete status.status
                   numbers['Andhra Pradesh']=numbers['Andhra Pradesh']+Number(status['ap'])
                   numbers['Arunachal Pradesh']=numbers['Arunachal Pradesh']+Number(status['ar'])
                   numbers['Assam']=numbers['Assam']+Number(status['as'])
                   numbers['Bihar']=numbers['Bihar']+Number(status['br'])
                   numbers['Chhattisgarh']=numbers['Chhattisgarh']+Number(status['ct'])
                   numbers['Goa']=numbers['Goa']+Number(status['ga'])
                   numbers['Gujarat']=numbers['Gujarat']+Number(status['gj'])
                   numbers['Jammu and Kashmir']=numbers['Jammu and Kashmir']+Number(status['jk'])
                   numbers['Haryana']=numbers['Haryana']+Number(status['hr'])
                   numbers['Himachal Pradesh']=numbers['Himachal Pradesh']+Number(status['hp'])
                   numbers['Jharkhand']=numbers['Jharkhand']+Number(status['jh'])
                   numbers['Karnataka']=numbers['Karnataka']+Number(status['ka'])
                   numbers['Kerala']=numbers['Kerala']+Number(status['kl'])
                   numbers['Madhya Pradesh']=numbers['Madhya Pradesh']+Number(status['mp'])
                   numbers['Maharashtra']=numbers['Maharashtra']+Number(status['mh'])
                   numbers['Manipur']=numbers['Manipur']+Number(status['mn'])
                   numbers['Meghalaya']=numbers['Meghalaya']+Number(status['ml'])
                   numbers['Mizoram']=numbers['Mizoram']+Number(status['mz'])
                   numbers['Nagaland']=numbers['Nagaland']+Number(status['nl'])
                   numbers['Odisha']=numbers['Odisha']+Number(status['or'])
                   numbers['Punjab']=numbers['Punjab']+Number(status['pb'])
                   numbers['Rajasthan']=numbers['Rajasthan']+Number(status['rj'])
                   numbers['Sikkim']=numbers['Sikkim']+Number(status['sk'])
                   numbers['Tamil Nadu']=numbers['Tamil Nadu']+Number(status['tn'])
                   numbers['Telangana']=numbers['Telangana']+Number(status['tg'])
                   numbers['Tripura']=numbers['Tripura']+Number(status['tr'])
                   numbers['Uttarakhand']=numbers['Uttarakhand']+Number(status['ut'])
                   numbers['Uttar Pradesh']=numbers['Uttar Pradesh']+Number(status['up'])
                   numbers['West Bengal']=numbers['West Bengal']+Number(status['wb'])
                   numbers['Chandigarh']=numbers['Chandigarh']+Number(status['ch'])
                   numbers['Delhi']=numbers['Delhi']+Number(status['dl'])
                   
                   let prefinal={...numbers}
                   let entries = Object.entries(prefinal)
                   

                   let sorted = entries.sort((a, b) => Number(b[1]) - Number(a[1]))
                   let final = sorted.slice(0,10)
                   confirmedList.push(final)
                   
                   confirmedList.push(final)
                }
            })
            setStatesList(confirmedList)
            setnumbers(confirmedList[confirmedList.length-1])
            
            
            
        })
        // eslint-disable-next-line
    },[])
    useInterval(() => {
            if(statesList.length>0){
                if(count<statesList.length-1){
                    setdat(statesList[count])
                    setcount(count+1)
                }
                
            }
    }, 200)
    return(<div>
        
        <h1 style={{textAlign:"center"}}>Statewise Rise in Cases</h1>
        <RacingBarChart data={dat} />
      
    
    </div>)
}

export default Hbar