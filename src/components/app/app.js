import React from 'react'
import './app.css'

import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter/item-status-filter'


const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false},
        {label: 'Build app', important: true},
        {label: 'Have a lunch', important: false},
    ]

    return (
        <div className="todo-app">
            <AppHeader />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData}/>
        </div>
    )
}

export default App;