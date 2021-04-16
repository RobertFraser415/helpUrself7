import React from 'react';

const GetCard = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.what}</h4>
                <h5 className="card-title">From {props.username}</h5>
                <h2>What:{props.what}</h2>
                <h3>User:{props.username}</h3>
                <p>How Many:{props.howMany}</p>
                <p>A Brief Description:{props.description}</p>
                <p>Category:{props.category}</p>
                <p>Need it Now:{props.needNow}</p>
                <p>Need it SOONer or LATEr:{props.needLater}</p>
                <p>How to Contact:{props.email}</p>
            </div>
        </div>
    );
}

export default GetCard

//     < p class="card-text" > Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         < a href = "#" class="btn btn-primary" > Go somewhere</a >
// </div >