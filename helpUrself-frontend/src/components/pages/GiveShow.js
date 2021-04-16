import React, { Component } from 'react';
import GiveModel from '../models/GiveModel'
import GiveCard from '../cards/GiveCard'
import EditGive from '../forms/EditGive'
class GiveShow extends Component {
    state = {
        giveId:this.props.match.params.id,
        give: {},
        editToggle: false
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
        this.setState({editToggle:!this.state.editToggle})
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
               {this.state.editToggle && <EditGive {...this.state.give} />}
               <button onClick={this.deletedGive}>Delete</button>
               <button onClick={this.updateGive}>Edit</button>
            </div>
        );
    }
}
export default GiveShow;