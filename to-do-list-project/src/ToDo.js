import React, { Component } from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        };
        this.addNewTodo = this.addNewTodo.bind(this);
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form>
                        <input type="text" />
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
                    <button>Edit</button>
                    <button onClick={this.props.delete}>X</button>
                </div>
            );
        }
        return result;
    }
}
export default ToDo;
