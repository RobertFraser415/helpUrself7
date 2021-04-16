import React, { Component } from 'react';
import GiveModel from '../models/GiveModel'
import { Link } from 'react-router-dom'
import GiveCard from '../cards/GiveCard'

class GivesList extends Component {
    state = {
        gives: []
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        GiveModel.all().then(data => {
            console.log(data)
            this.setState({ gives: data.data.gives })
        })
    }
    render() {
        let givesList = []
        if (this.state.gives) {
            givesList = this.state.gives.map((give, index) => {
                return (<Link to={`/gives/${give._id}`} key={index}>
                    <GiveCard {...give} />
                </Link>
                )
            })
        }
        console.log(this.state.gives)
        return (
            <div>
                <h1>These R all the GIVES </h1>
                {this.state.gives ? givesList : 'No Gives...'}
            </div>
        );

    }
}


export default GivesList;
