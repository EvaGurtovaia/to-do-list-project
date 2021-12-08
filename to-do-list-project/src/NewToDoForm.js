import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuidv4(), isCompleted: false};
        console.log(newTodo);
        this.props.addNewTodo(newTodo);
        console.log("I'm here!");
        this.setState({ task: "" });
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Add a task</label>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        id="task"
                        onChange={this.handleChange}
                    />

                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default NewToDoForm;
