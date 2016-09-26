import React from 'react';

const Button = React.createClass({
    render: function() {
        return <button onClick={this.props.handleClick}>{this.props.num}</button>;
    },
}
);


export default Button;
