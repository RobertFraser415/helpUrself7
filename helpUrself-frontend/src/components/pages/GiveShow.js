import React, { Component } from 'react';
import GiveModel from '../models/GiveModel'
import GiveCard from '../cards/GiveCard'

class GiveShow extends Component {
    state = {
        giveId:this.props.match.params.id,
        give: {}
    }
    componentDidMount(){
        this.fetchData()
    }
  fetchData = () => {
      GiveModel.show(this.state.giveId)
          .then(data => {
              this.setState({give: data.give})
          })
      }

      updateGive = give => {
        const isUpdatedGive = g => {
            return g._id === give._id;
        };
        GiveModel.update(give)
            .then((res) => {
              let gives = this.state.gives;
              gives.find(isUpdatedGive).body = give.body;
              this.setState({ gives: gives });
            });
      };


  deletedGive = () => {
      console.log('deleted')
      GiveModel.destroy(this.state.giveId)
      .then(() => {
          this.props.history.push('/gives')
      })
  }
    render() {
        return (
            <div>
               {this.state.give ? <GiveCard {...this.state.give} /> : "Loading..."}
               <button onClick={this.deletedGive}>Delete</button>
               <button onClick={this.updateGive}>Edit</button>
            </div>
        );
    }
}

export default GiveShow;

