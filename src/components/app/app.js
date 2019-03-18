import React, {Component} from 'react'
import './app.css'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter/item-status-filter'


export default class App extends Component {
    state = {
        todoData: [
            {label: 'Drink coffee', important: false},
            {label: 'Build app', important: true},
            {label: 'Have a lunch', important: false},
        ]
    }
    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo="3" done="2" />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData} onDeleted={(key) => console.log('del',key)}/>
            </div>
        )
    }
}