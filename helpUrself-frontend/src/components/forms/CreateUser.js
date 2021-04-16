
//compare to create get and give 


import React, { Component } from 'react';
import UserModel from '../models/UserModel'

class CreateUser extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        streetNumber: "",
        streetName: "",
        unit: "",
        city: "",
        state: "",
        zipcode: "",
        phoneNumberHome: "",
        phoneNumberMobile: "",
        // register_date: null,
        // usersGives: [],
        // usersGets: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);



    handleSubmit = e => {
        e.preventDefault()

        UserModel.create(this.state)
            .then(data => {
                this.props.history.push('/users')
            })
    }

    handleChange = e => {
        if (e.target.type !== "text") {
            this.setState({ completed: !this.state.completed })
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }





    render() {
        return (

            <div>
                <h2>Create a User</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="streetNumber">Number</label>
                        <input
                            type="text"
                            name="streetNumber"
                            onChange={this.handleChange}
                            value={this.state.streetNumber} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="streetName">Street Name</label>
                        <input
                            type="text"
                            name="streetName"
                            onChange={this.handleChange}
                            value={this.state.streetName} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="unit">Unit</label>
                        <input
                            type="text"
                            name="unit"
                            onChange={this.handleChange}
                            value={this.state.unit} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            onChange={this.handleChange}
                            value={this.state.city} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            name="state"
                            onChange={this.handleChange}
                            value={this.state.state} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input
                            type="text"
                            name="zipcode"
                            onChange={this.handleChange}
                            value={this.state.zipcode} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="phoneNumberHome">Home Phone</label>
                        <input
                            type="text"
                            name="phoneNumberHome"
                            onChange={this.handleChange}
                            value={this.state.phoneNumberHome} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="phoneNumberMobile">Mobile Phone</label>
                        <input
                            type="text"
                            name="phoneNumberMobile"
                            onChange={this.handleChange}
                            value={this.state.phoneNumberMobile} />
                    </div>
                    <input type="submit" value="Create User" />
                </form>
            </div>
        )
    }
}

export default CreateUser;
