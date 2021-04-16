import React from 'react';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';

const GiveCard = (props) => {
    return (
<div className="card">
    <div className="card-body">
        <h4 className="card-title">{props.what}</h4>
        <h5 className="card-text">From {props.username}</h5>
   <p>How Many?:{props.howMany}</p>
   <p>A Brief Description:{props.description}</p>
   <p>Category:{props.category}</p>
   <p>Current Market Value?:{props.value}</p>
   <p>Available Now:{props.availableNow}</p>
   <p>Available SOONer or LATEr:{props.availableLater}</p>
   <p>How to Contact:{props.email}</p>
   <p>GIVE Created on: {props.created_date} </p>
</div>
</div>
        );
    }
    export default GiveCard;
        
    // <div>
    //   <Card>
    //     {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
    //     <CardBody>
    //       <CardTitle tag="h5">{props.what}</CardTitle>
    //       <CardSubtitle tag="p" className="mb-2 text-muted">{props.username}</CardSubtitle>
    //       <CardSubtitle tag="p" className="mb-2 text-muted">{props.howMany}</CardSubtitle>
    //       <CardSubtitle tag="p" className="mb-2 text-muted">{props.value}</CardSubtitle>
    //       <CardSubtitle tag="p" className="mb-2 text-muted">{props.category}</CardSubtitle>
    //       <CardSubtitle tag="p" className="mb-2 text-muted">{props.availableNow}</CardSubtitle>
    //       <CardSubtitle tag="p" className="mb-2 text-muted">{props.availableLater}</CardSubtitle>
    //       <CardSubtitle tag="p" className="mb-2 text-muted">{props.email}</CardSubtitle>
    //       <CardSubtitle tag="p" className="mb-2 text-muted">{props.created_date}</CardSubtitle>
    //       <CardText>{props.description}</CardText>
    //       <Button>Button</Button>
    //     </CardBody>
    //   </Card>
    // </div>