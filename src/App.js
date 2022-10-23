import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Cart from './pages/Cart';

function App() {
	const [searchValue, setSearchValue] = React.useState('');

	return (
		<div className="wrapper">
			<Header value={searchValue} setSearchValue={setSearchValue} />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home searchValue={searchValue} />} />
					<Route path="*" element={<NotFoundPage />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
