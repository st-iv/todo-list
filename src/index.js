import React from 'react'
import ReactDOM from 'react-dom'

const el = (
    <div>
<h1>ToDo List</h1>
        <input type="text" placeholder="search"/>
        <ul>
            <li>Learn React</li>
            <li>Build App</li>
        </ul>
    </div>
)

ReactDOM.render(el, document.getElementById('root') )