import React, { Component } from 'react';
import aGetModel from '../models/aGetModel'

class CreateGet extends Component {
    state = {
        username: '',
        what: '',
        description: '',
        howMany: '',
        category: '',
        needNow: true,
        needLater: false,
        createdAt: null,
    }



    handleSubmit = (e) => {
        e.preventDefault()
        aGetModel.create(this.state)
            .then(data => {
                console.log(data)
                this.props.history.push('/gets')
            })
    }
    handleChange = (e) => {
        if (e.target.type !== "text") {
            //  DOX const value = target.type === 'checkbox' ? target.checked : target.value;
            this.setState({  [e.target.name]: e.target.checked  })
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" class="form-control" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="what">What</label>
                        <input name="what" type="text" class="form-control" id="what" placeholder="What is it?" value={this.state.what} onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="description">Description</label>
                        <input name="description" type="text" class="form-control" id="description" placeholder="Brief Description" value={this.state.description}onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="howMany">How Many?</label>
                        <input name="howMany" type="text" class="form-control" id="howManyGet" placeholder="How Many?" value={this.state.howMany}onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="category">Category</label>
                        <input name="category" type="text" class="form-control" id="category" placeholder="Food, Gear, Service" value={this.state.category} onChange={this.handleChange} />
                    </div>

                    <div class="form-check">
                        <input name="needNow" type="checkbox" class="form-check-input" id="needNow" value={this.state.needNow} onClick={this.handleChange} />
                        <label class="form-check-label" htmlFor="needNow">Do you need it NOW?</label>
                    </div>
                    <div class="form-check">
                        <input name="needLater" type="checkbox" class="form-check-input" id="needLater" value={this.state.needLater} onClick={this.handleChange} />
                        <label class="form-check-label" htmlFor="needLater">Do you need it LATER / SOON ?</label>
                    </div>

                    <div class="form-group">
                        <label htmlFor="email">Email address</label>
                        <input name="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <input type="submit" value="Create this GET" class="btn btn-success" />
                </form >
            </>

        );
    }
}



export default CreateGet;
// this.onChangeUserName = this.onChangeUserName.bind(this)
// this.onChangeWhat = this.onChangeWhat.bind(this)
// this.onChangeDescription = this.onChangeDescription.bind(this)
// this.onChangeHowMany = this.onChangeHowMany.bind(this)
// this.onChangeCategory = this.onChangeCategory.bind(this)
// this.onChangeNeedNow = this.onChangeNeedNow.bind(this)
// this.onChangeNeedLater = this.onChangeUserName.bind(this)
// this.onChangeDate = this.onChangedate.bind(this)
