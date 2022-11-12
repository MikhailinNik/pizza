import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Dashboard from './layouts/Dashboard';

import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import FullCard from './pages/FullCard';
import Cart from './pages/Cart';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />}>
				<Route path="" element={<Home />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="pizza/:id" element={<FullCard />} />
				<Route path="cart" element={<Cart />} />
			</Route>
		</Routes>
	);
}

export default App;
