import React, { Component } from 'react';
import UserModel from '../models/UserModel'
import UserCard from '../cards/UserCard'
import { Link } from 'react-router-dom'


class AllUsersList extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        UserModel.all().then(data => {
            this.setState({ users: data.users })
        })
    }
    render() {

     let AllUsersList = this.state.users.map((user, index) => {
            return <Link to={`/users/${user._id}`} key={index}>
                <UserCard {...user} />
            </Link>
        })

        return (
            <div>
            <h2>These R All the Users</h2>
            {this.state.users ? AllUsersList : 'Loading...'}
            </div>
        )
    }
}
    export default AllUsersList;
