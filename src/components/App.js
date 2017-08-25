import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../base';
// CSS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css'

class App extends React.Component {

	state = {
		messages : {}
	}

	componentWillMount() {
		this.ref = base.syncState('/',{
			context: this,
			state: 'messages'
		});
	}

	componentDidUpdate() {
		//Block Scroll
		this.messages.scrollTop = this.messages.scrollHeight; 
	}

	addMessage = message => {
		//Copier le state
		const messages = {...this.state.messages};
		//Ajouter le timestamp
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		//delete if more than 10 messages
		Object.keys(messages).slice(0, -10).map(
			key => messages[key] = null
		);
		//State update
		this.setState({messages});
	};

	isUser = (pseudo) => {
		return pseudo === this.props.params.pseudo;
	}

	render() {

		const messages = Object
			.keys(this.state.messages)
			.map(key => <Message key={key} details={this.state.messages[key]} isUser={this.isUser}/>)
		;

		return (
			<div className="box">
				<div>
					<div className="messages" ref={input => this.messages = input}>
						<ReactCSSTransitionGroup
							component="div"
							className="message"
							transitionName="message"
							transitionEnterTimeout={200}
							transitionLeaveTimeout={200}
						>
							{messages}
						</ReactCSSTransitionGroup>
					</div>
					<Formulaire 
						addMessage={this.addMessage} 
						pseudo={this.props.params.pseudo}
						length="250"
					/>
				</div>
			</div>
		)
	}
}

export default App;