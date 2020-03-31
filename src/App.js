import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Plant the vegetables" },
      { id: 2, content: "Buy groceries" },
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <Todos todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;