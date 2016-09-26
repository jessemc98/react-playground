import React, { Component} from 'react';

class Todo extends Component{
	render() {
		const { info, handleRemove, handleEdit } = this.props;
		return (
			<li>
				{info}
				<button onClick={handleRemove}>X</button>
			</li>
		);
	}
}

export default Todo;