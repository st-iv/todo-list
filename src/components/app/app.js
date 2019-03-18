import React, {Component} from 'react'
import './app.css'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter/item-status-filter'


export default class App extends Component {

    state = {
        todoData: [
            {label: 'Drink coffee', important: false, id: 1},
            {label: 'Build app', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3},
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1)
            ]

            return {
                todoData: newArray
            }
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo="3" done="2"/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}/>
            </div>
        )
    }
}