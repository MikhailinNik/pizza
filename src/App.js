import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Card from './components/Card';
import React from 'react';
// import data from './assets/data.json';
import axios from 'axios';

function App() {
	const [items, setItems] = React.useState([]);
	React.useEffect(() => {
		axios
			.get('https://run.mocky.io/v3/9aa40876-5105-43f2-90d5-e264152e0c33')
			.then(res => setItems(res.data));
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{items.map(obj => (
							<Card key={obj.id} {...obj} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
