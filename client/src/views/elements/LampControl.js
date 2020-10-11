import React from "react"
import { FormCheck } from "react-bootstrap"

export default function LampContol(props){

    return(
    <div>        
        <FormCheck type="checkbox" label={props.lamp.adress} /> 
    </div>
        
    )
}