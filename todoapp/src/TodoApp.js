import React, { Component} from 'react';
import Todo from './Todo.js';

class TodoApp extends Component{
	constructor(){
		super();
		this.state = {
			todos: [],
			newTodo: null
		};
	}
	componentWillMount() {
		this.createTodo('get eggs', 1);
	}

	render() {
		const { todos, newTodo} = this.state;
		return (
			<div className="TodoApp">
				<input onChange={this.setNew.bind(this)} value={newTodo} />
				<button onClick={this.createTodo.bind(this, newTodo)}>add Todo</button>
				<ul>
					{todos}
				</ul>
			</div>
		);
	}

	createTodo(info){
		if(!info) return;
		const {todos} = this.state;
		const id = todos.length;
		todos.push(<Todo key={id} info={info} handleRemove={this.removeTodo.bind(this, id)}/>);
		this.setState({todos, newTodo: ''});
	}

	setNew(e) {
		this.setState({newTodo: e.target.value});
	}

	removeTodo(id){
		const newTodos = this.state.todos.filter((todo) => {
			return todo.key != id;
		});
		this.setState({todos: newTodos});
	}


}

export default TodoApp;