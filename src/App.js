import React from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<NotFoundPage />
			</div>
		</div>
	);
}

export default App;
