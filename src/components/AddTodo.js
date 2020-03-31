import React, { Component } from "react";

class AddTodo extends Component {
    state = {
        content: ""
    };

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="todo">Add New Todo:</label>
                    <input onChange={ this.handleChange } value={ this.state.content } id="todo" name="todo" type="text"></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;