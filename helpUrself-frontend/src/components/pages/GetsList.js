import React, { Component } from 'react';
import aGetModel from '../models/aGetModel'
import { Link } from 'react-router-dom'
import GetCard from '../cards/GetCard'

class GetsList extends Component {
    state= {
        gets: []
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData = () => {
        aGetModel.all().then(data => {
            console.log(data)
            this.setState({gets: data.gets})
        })
    }
    render() {
        let getsList = this.state.gets.map((get, index) => {
            return ( <Link to={`/gets/${get._id}`} key={index}>
                    <GetCard {...get}/>
                </Link>
            )
        })
        return (
            <div>
                <h1>These R all the GETS </h1>
                {this.state.gets ? getsList : 'Loading...'}
            </div>
            );

        }
    }


export default GetsList;
