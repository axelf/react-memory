import React from 'react';

import Board from './components/Board';
import './App.css';
import './styles/main.scss';

function App() {
	return (
		<div className="container">
			<h1>Memory for Webdevs</h1>
			<Board />
		</div>
	)
}

export default App;
