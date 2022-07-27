import React from "react";
import NameList from "./NameList";
import moment from "moment";

function NameListItem(props){
    return(
        <React.StrictMode>
        <ul>
        
        <li>
            <p><img src={props.Avatar}/>Name: {props.Name}</p>
            <p>Email: {props.Email}</p>
            <p>City: {props.City}</p> 

            {/* without using moment Js Library */}
            {/* <p>Birthday:{` `}
                {new Intl.DateTimeFormat('en-GB').format(new Date (props.Birthday)) }</p> 
                // To change the date format */}

            {/* By using Moment js */}
            <p>Birthday:{' '} 
                {moment(props.birthday).format('DD-MM-YYYY') }</p>
            <p>Birthday:{' '} 
                {moment(props.birthday).format('MMMM Do YYYY, h:mm:ss a') }</p> 
        </li>
           
        </ul>
        </React.StrictMode>
        
    )
}

export default NameListItem;