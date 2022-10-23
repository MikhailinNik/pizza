import React from 'react';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

import styles from './Home.module.scss';

import axios from 'axios';

export default function Home({ searchValue }) {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [sortProperty, setSortProperty] = React.useState({
		name: 'поплуярности',
		sort: 'rating',
	});

	const isCategory = categoryId > 0 ? `category=${categoryId}` : '';
	const isSort = `_sort=${sortProperty.sort}&_order=desc`;
	const isSearch = searchValue ? `&q=${searchValue.toLowerCase()}` : '';

	React.useEffect(() => {
		setIsLoading(true);
		axios.get(`http://localhost:3001/data?${isCategory}&${isSort}${isSearch}`).then(res => {
			setItems(res.data);
			setIsLoading(false);
		});
	}, [categoryId, sortProperty, searchValue]);

	const search = items
		// .filter(item => (item.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false))
		.map(obj => <Card key={obj.id} {...obj} />);

	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onChangeCategory={index => setCategoryId(index)} />
				<Sort value={sortProperty} onChangeSort={index => setSortProperty(index)} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className={styles.content}>
				<div className="content__items">
					{isLoading ? [...new Array(6)].map((_, index) => <Loading key={index} />) : search}
				</div>
			</div>
		</div>
	);
}
