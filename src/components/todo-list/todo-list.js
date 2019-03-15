import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ({todos, onDeleted}) => {

    const elements = todos.map((item, key) => {
        return (
                <li key={key} className="list-group-item">
                    <TodoListItem {...item} onDeleted={() => onDeleted(key)}/>
                </li>
            )
    })

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    )
}

export default TodoList