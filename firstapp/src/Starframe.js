import React from 'react';
import './frame.css';
import './starframe.css';

const StarFrame = React.createClass({
	render: function() {
		let numberOfStars = this.props.numberOfStars;
		let _stars = this.stars(numberOfStars);
		return (
		<div className="frame">
			{_stars}
		</div>
		);
	},

	stars: function(num) {
		///returns array with num <div> elements
		let stars = [];
		for(let i = 0; i < num; i += 1){
			stars.push(<div key={"star" + i} className="star"></div>);
		}
		return stars;
	}
});

export default StarFrame;