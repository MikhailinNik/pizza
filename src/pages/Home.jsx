import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Card from '../components/Card/Card';
import Loading from '../components/Loading';

import axios from 'axios';

export default function Home() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		axios.get('https://run.mocky.io/v3/9aa40876-5105-43f2-90d5-e264152e0c33').then(res => {
			setItems(res.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, index) => <Loading key={index} />)
					: items.map(obj => <Card key={obj.id} {...obj} />)}
			</div>
		</div>
	);
}
