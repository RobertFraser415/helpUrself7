import React, { Component } from 'react';
import GiveModel from '../models/GiveModel'
class EditGive extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: props.username,
            item: props.item,
            howMany: props.howMany,
            description: '',
            category: props.category,
            value: '',
            availableNow: true,
            availableLater: false,
            email: '',
        }
    }
    handleSubmit = e => {
        GiveModel.update(this.props._id,this.state)
            .then(data => {
                console.log(data)
            })
    }
    handleChange = e => {
        if (e.target.type !== "text") {
            this.setState({ [e.target.name]: e.target.checked })
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
                        <input name="username" value={this.state.username} type="text" class="form-control" id="username" placeholder="Who are U?" onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="item">Item</label>
                        <input name="item" value={this.state.item} type="text" class="form-control" id="item" placeholder="What is it?" onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="howMany">How Many?</label>
                        <input name="howMany" value={this.state.howMany} type="text" class="form-control" id="howMany" placeholder="How Many?" onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="description">Brief Description</label>
                        <input name="description" value={this.state.description} type="text" class="form-control" id="description" placeholder="A Brief Description" onChange={this.handleChange} />
                    </div>
​
                    <div class="form-group">
                        <label htmlFor="category">Category</label>
                        <input name="category" value={this.state.category} type="text" class="form-control" id="category" placeholder="Food, Gear or Service?" onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="value">Value</label>
                        <input name="value" value={this.state.value} type="text" class="form-control" id="value" placeholder="What is it's current value?" onChange={this.handleChange} />
                    </div>
                    <div class="form-check">
                        <input name="availableNow" defaultChecked={this.state.availableNow} type="checkbox" class="form-check-input" id="availableNow" onClick={this.handleChange} />
                        <label class="form-check-label" htmlFor="giveNow">available NOW?</label>
                    </div>
                    <div class="form-check">
                        <input name="availableLater" defaultChecked={this.state.availableLater} type="checkbox" class="form-check-input" id="availableLater" onClick={this.handleChange} />
                        <label class="form-check-label" htmlFor="availableLater">available SOONer or LATEr?</label>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email address</label>
                        <input name="email" value={this.state.email} type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <input type="submit" value="Edit Give" />
                </form>
            </>
        );
    }
}
export default EditGive;