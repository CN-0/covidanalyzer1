import React from 'react'
import {Form} from 'react-bootstrap'

const Selectform =(props)=>{
    let form
    if(props.district){
       form =(
       <Form><Form.Control as="select" custom 
        value={props.district} 
        onChange={props.handleChanger}
   >
       {props.districtList.map(district=><option key={district.district} value={district.district}>{district.district}</option>)}
   </Form.Control></Form>)
    }else{
       form = (<Form><Form.Control as="select" custom 
        value={props.type} 
        onChange={props.handleChange}
   >
        <option value="confirmed">Confirmed</option>
        <option value="active">Active</option>
        <option value="recovered">Recovered</option>
        <option value="deceased">Deceased</option>
   </Form.Control></Form>)
    }
return(<React.Fragment>{form}</React.Fragment>)
}

export default Selectform