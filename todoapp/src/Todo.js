import React, { Component} from 'react';

class Todo extends Component{
	constructor(){
		super();
	}
	render() {
		const { id, info } = this.props;
		return (
			<li> {info} </li>
		);
	}
}

export default Todo;