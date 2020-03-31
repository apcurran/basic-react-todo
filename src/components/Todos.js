import React from "react";

function Todos({ todos }) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="todo" key={ todo.id }>
                    <p>{ todo.content }</p>
                </div>
            )
        })
    ) : (
        <p className="message">You have no current todos.</p>
    )

    return (
        <div className="todos-container">
            { todoList } 
        </div>
    );
}

export default Todos;