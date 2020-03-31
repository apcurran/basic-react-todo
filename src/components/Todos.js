import React from "react";

function Todos({ todos, deleteTodo }) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="todo" key={ todo.id }>
                    <p onClick={ () => deleteTodo(todo.id) }>{ todo.content }</p>
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