import React, {Component} from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {
    render() {
        const {label, important = false} = this.props;

        const style = {
            color: important ? 'tomato' : 'black'
        }

        return (
            <div className="todo-list-item" style={style}>
            <span>
                {label}
            </span>
                <button type="button" className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"/>
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"/>
                </button>
            </div>
        )
    }
}