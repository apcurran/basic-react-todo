import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from "./components/AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Plant the vegetables" },
      { id: 2, content: "Buy groceries" },
    ]
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos
    });
  }

  addTodo = (todo) => {
    todo.id = Date.now().toString();

    const todos = [...this.state.todos, todo];

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
        <AddTodo addTodo={ this.addTodo } />
      </div>
    );
  }
}

export default App;