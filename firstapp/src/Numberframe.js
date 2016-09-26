import React from 'react';
import './frame.css';

const Frame = React.createClass({
	render: function() {
		let numberOfElems = this.props.elems;
		let className = this.props.class;
		let clickHandler = this.props.clickHandler || function(){};
		if(className === undefined){
			let err = new Error('need to define class property on Frame component');
			throw err;
		}
		let _elements = this.elements(numberOfElems, className, clickHandler);

		return (
		<div className={"frame "+className+"Frame"}>
			{_elements}
		</div>
		///
		);
	},

	elements: function(numOfElements, className, clickHandler) {
		//returns array with num <div> elements
		let elems = [];
		if(Array.isArray(numOfElements)){
			numOfElements.forEach((e, i) => elems.push(
				<div key={className + i} className={className} onClick={clickHandler.bind(null, e || i)}>{e}</div>///
				));
			return elems;
		}
		for(let i = 0; i < numOfElements; i += 1){
			elems.push(<div key={className + i} className={className}></div>);///
		}
		return elems;
	}
});

export default Frame;