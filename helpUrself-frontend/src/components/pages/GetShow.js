import React, { Component } from 'react';
import aGetModel from '../models/aGetModel'
import GetCard from '../cards/GetCard'
import EditGet from '../forms/EditGet'

class GetShow extends Component {
    state = {
        getId: this.props.match.params.id,
        get: {},
        editToggle: false
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        aGetModel.show(this.state.getId)
            .then(data => {
                this.setState({ get: data.get })
            })
    }

    updateGet = get => {
        const isUpdatedGet = g => {
            return g._id === get._id;
        };
        this.setState({editToggle:!this.state.editToggle})
        // aGetModel.update(get)
        //     .then((res) => {
        //       let gets = this.state.gets;
        //       gets.find(isUpdatedGet).body = get.body;
        //       this.setState({ gets: gets });
        //     });
      };
    
    deletedGet = () => {
        console.log('deleted')
        aGetModel.delete(this.state.getId)
            .then(() => {
                this.props.history.push('/gets')
            })
    }
    render() {
        return (
            <div>
                {this.state.get ? <GetCard {...this.state.get} /> : "Loading..."}
                {this.state.editToggle && <EditGet {...this.state.get} />}
                <button onClick={this.deletedGet}>Delete</button>
                <button onClick={this.updateGet}>Edit</button>

            </div>
        );
    }
}

export default GetShow;
