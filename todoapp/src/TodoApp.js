import React, { Component} from 'react';
import Todo from './Todo.js';

class TodoApp extends Component{
	constructor(){
		super();
		this.state = {
			todos: []
		};
	}
	componentWillMount() {
		this.createTodo('get eggs', 1);
	}

	render() {
		return (
			<ul>
				{this.state.todos}
			</ul>
		);
	}

	createTodo(info, id){
		const {todos} = this.state;
		todos.push(<Todo key={id} info={info} />);
		this.setState({todos});
	}


}

export default TodoApp;