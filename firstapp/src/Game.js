import React from 'react';
import Frame from './Numberframe.js';
import './starframe.css';

const Game = React.createClass({
	getInitialState: function (){
		return {
			numberOfStars: null,
			selectedNums: []
		};
	},
	componentWillMount : function (){
		this.setRandomStars();
	},
	render: function (){
		return (
			<div className="Game">
			  <div className="floatLeft">
				<Frame elems={this.state.numberOfStars} class="star"/>
			  </div>///
			  <button onClick={this.submit}>submit</button>
			  <div className="floatRight">
				<Frame elems={this.state.selectedNums} class="number" clickHandler={this.deselectNum}/>
			  </div>///
			  <Frame elems={[1,2,3,4,5,6,7,8,9]} class="chooseNumber" clickHandler={this.selectNum}/>
			</div>///
		);
	},
	setRandomStars: function() {
		let stars = Math.floor(Math.random() * 9) + 1;
		this.setState({numberOfStars: stars});
	},
	selectNum: function(num) {
		let selectedNums = this.state.selectedNums;
		if(selectedNums.indexOf(num) > -1){
			return;
		}
		selectedNums.push(num);
		this.setState({ selectedNums: selectedNums });
	},
	deselectNum: function(num) {
		let selectedNums = this.state.selectedNums;
		selectedNums.splice(selectedNums.indexOf(num), 1);
		this.setState({ selectedNums });
	},
	submit: function() {
		if(this.state.selectedNums.reduce(
	    	(total, x) => total+x, 0) === this.state.numberOfStars){
			console.log('correct');
			return this.setRandomStars();
		}
		console.log('not correct');
	}

});

export default Game;