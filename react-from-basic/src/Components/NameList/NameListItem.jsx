import React from "react";
import NameList from "./NameList";

function NameListItem(props){
    return(
        <React.StrictMode>
        <ul>
        
        <li>
            <p><img src={props.Avatar}/>Name: {props.Name}</p>
            <p>Email: {props.Email}</p>
            <p>City: {props.City}</p> 
            <p>Birthday: {props.Birthday}</p> 
            <p>City: {props.City}</p> 
        </li>
           
        </ul>
        </React.StrictMode>
        
    )
}

export default NameListItem;