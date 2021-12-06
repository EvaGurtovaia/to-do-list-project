import React, { Component } from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
        };
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }
    handleChange(evt) {
        this.setState({ task: evt.target.value });
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div>
                    <h2>To Do List</h2>
                    <li>
                        <div className="ToDo">{this.props.task}</div>
                    </li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.props.delete}>X</button>
                </div>
            );
        }
        return result;
    }
}
export default ToDo;
