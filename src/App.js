import React from 'react';
import List from './components/List/List';
import Form from './components/From/Form';
import './App.css';

class App extends React.Component {
  state = {
    rows: [
      { id:1, title:1, isCompleted:true},
      { id:2, title:2, isCompleted:false},
      { id:3, title:3, isCompleted:true}
    ]
    }

    addToDo = (title) => {
      this.setState({
        rows:[
          ...this.state.rows, 
          {id: Date.now(), title, isCompleted:false}
        ]
      })
    }

    toggleTodo = (id) => {
      const newTodos = this.state.rows.map((todo) => (todo.id !==id
        ? todo
        : {...todo, isCompleted: !todo.isCompleted}));
        this.setState({rows:newTodos})
    }

    deleteTodo = (id) => {
      this.setState({rows: this.state.rows.filter(todo => todo.id !== id)})
    }
  render() {
      return  (
          <div className='wrapper'>
              <h1>To do list</h1>
              <List 
                rows={this.state.rows} 
                onToggle={this.toggleTodo} 
                onDeleteItem={this.deleteTodo}
                />
              <Form onAddElement={this.addToDo}/>
          </div>
      )
  }
}

export default App;
