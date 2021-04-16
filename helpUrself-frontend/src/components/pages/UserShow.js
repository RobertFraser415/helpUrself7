import React, { Component } from 'react';
import UserModel from '../models/UserModel'
import UserCard from '../cards/UserCard'

class UserShow extends Component {
    state = {
        userId:this.props.match.params.id,
        user: {}
    }
    componentDidMount(){
        this.fetchData()
    }
  fetchData = () => {
      UserModel.show(this.state.userId)
          .then(data => {
              this.setState({user: data.user})
          })
      }
      deletedUser = () => {
        console.log('something')
        UserModel.destroy(this.state.userId)
        .then(() => {
            this.props.history.push('/users')
        })
    }
    render() {
        return (
            <div>
               {this.state.user ? <UserCard {...this.state.user} /> : "Loading..."}
            </div>
        );
    }
}

export default UserShow;
