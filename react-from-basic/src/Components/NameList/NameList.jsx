import React from "react";
import NameListItem from "./NameListItem";

function NameList(){

    const nameList={ 
        Name: {
         "title": "mr",
         "first": "brad",
         "last": "gibson"
         },

         location: {
         "city": "kilcoole"
         },

         email:  "brad.gibson@example.com",
     

         dob: {
         "date": "1993-07-20T09:44:18.674Z",
         "age": 26
         },

         picture: {
         
         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg"
         },
          
     };


    return(
       <React.Fragment>
           <h1>Name List </h1>
             <hr/>
             <ul>
                <NameListItem
                
                 Name={nameList.Name.title +' '+nameList.Name.first+' '+nameList.Name.last}
                 City={nameList.location.city}
                 Email={nameList.email }
                 Birthday={nameList.dob.date }
                 Avatar={nameList.picture.medium}
                
                 />
                 
                
            </ul>
                
               
       </React.Fragment>
        
    );
    
}

export default NameList;