import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
    const items = ['Coffee', 'Build App']
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    )
}

const AppHeader = () => {
    return <h1>ToDo List</h1>
}

const SearchPanel = () => {
    return <input type="text" placeholder="search"/>
}

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))