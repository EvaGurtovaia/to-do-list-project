import React, { Component } from "react";
import "./ToDo.css";

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
        this.handleToggle = this.handleToggle.bind(this);
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
    handleToggle(evt) {
        this.props.toggle(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="ToDo">
                    <form
                        className="ToDo-edit-form"
                        onSubmit={this.handleUpdate}
                    >
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
                <div className="ToDo">
                    <li
                        className={
                            this.props.isCompleted
                                ? "ToDo-task completed"
                                : "ToDo-task"
                        }
                        onClick={this.handleToggle}
                    >
                        <div>{this.props.task}</div>
                    </li>
                    <div className="ToDo-buttons">
                        <button onClick={this.toggleForm}>
                            <i class="fas fa-pen" />
                        </button>
                        <button onClick={this.props.delete}>
                            <i class="fas fa-trash" />
                        </button>
                    </div>
                </div>
            );
        }
        return result;
    }
}
export default ToDo;
