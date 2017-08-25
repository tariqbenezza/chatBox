import React from 'react';

class Message extends React.Component {

	preRender = (isUser) => {
		if(isUser){
			return(
				<p className="user-message">
					{this.props.details.message}
				</p>
			)
		}
	};

	render() {
		return (
			<p className="user-message">
				{this.props.details.pseudo} : {this.props.details.message}
			</p>
		)
	}
}

export default Message;