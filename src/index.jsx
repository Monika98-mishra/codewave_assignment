import React from 'react';
import ReactDOM from 'react-dom';
import HooksComponent from './Component/HooksComponent.jsx';
import DetailsMovie from './Component/DetailsMovie';
import { Route, HashRouter } from 'react-router-dom';

function App() {

	const myPage = (
		<HashRouter>
			<Route exact path="/" component={HooksComponent} />
			<Route exact path="/DetailsMovie/:id" component={DetailsMovie} />
		</HashRouter>
	);
	return (
		<>
			{myPage}
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));


