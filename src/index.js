import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build App</li>
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