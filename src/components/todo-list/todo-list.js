import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ({todos}) => {

    const elements = todos.map((item, key) => {
        return (
                <li key={key} className="list-group-item">
                    <TodoListItem {...item} onDeleted={() => console.log('del')}/>
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