//REACT
import React from 'react';
import {render} from 'react-dom';
//Component
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';
//Router
import {BrowserRouter, Match, Miss} from 'react-router';
//CSS
import './index.css';

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/chatBox/" component={Connexion} />
				<Match pattern="/chatBox/pseudo/:pseudo" component={App} />
				<Miss component={NotFound}/>
			</div>
		</BrowserRouter>
	)
}

render(
	<Root />,
	document.getElementById('root')
);