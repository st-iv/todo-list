import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import AppHeader from './components/app-header/app-header'
import SearchPanel from './components/search-panel/search-panel'
import TodoList from './components/todo-list/todo-list'
import ItemStatusFilter from './components/item-status-filter/item-status-filter'


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

ReactDOM.render(<App />, document.getElementById('root'))