import React, { Component } from "react";

class ToDo extends Component {
    render() {
        return (
            <div>
                <h2>To Do List</h2>
                <li>
                    <div className="ToDo">{this.props.task}</div>
                </li>
                <button>Edit</button>
                <button>X</button>
            </div>
        );
    }
}
export default ToDo;
