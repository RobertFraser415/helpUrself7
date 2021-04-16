import React from 'react';

const UserCard = (props) => {
        return (
            <div>
    
           <h2>{props.username} Details</h2>
           <p>Email:{props.email}</p>
           <p>{props.firstName}</p>
           <p>{props.lastName}</p>
           <p>{props.firstName}</p>
           <p>USER Created on: {props.created_date} </p>
        </div>
            //    "username": "LovesHelp",
            // "email": "helping@me.com",
            // "password": "tester",
            // "firstName": "Loves",
            // "lastName": "Help",
            // "streetNumber": 123,
            // "streetName": "Jones St.",
            // "unit": "ABC",
            // "city": "San Francisco",
            // "state": "CA",
            // "zipcode": 94102,
            // "phoneNumberHome": 3333333333,
            // "phoneNumberMobile": 7777777777,
            // "register_date": null,
            // "usersGives": [],
            // "uersGets": [] 
        );
    }

export default UserCard;
