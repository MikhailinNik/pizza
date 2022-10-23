import React from 'react';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { SearchContext } from '../../App';

import styles from './Home.module.scss';

import axios from 'axios';

export default function Home() {
	const { searchValue } = React.useContext(SearchContext);
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [sortProperty, setSortProperty] = React.useState({
		name: 'поплуярности',
		sort: 'rating',
	});
	const [currentPage, setCurrentPage] = React.useState(1);

	React.useEffect(() => {
		const isCategory = categoryId > 0 ? `category=${categoryId}` : '';
		const isSort = `_sort=${sortProperty.sort}&_order=desc`;
		const isSearch = searchValue ? `&q=${searchValue.toLowerCase()}` : '';

		setIsLoading(true);
		axios
			.get(
				`http://localhost:3001/data?_page=${currentPage}&_limit=4&${isCategory}&${isSort}${isSearch}`,
			)
			.then(res => {
				setItems(res.data);
				setIsLoading(false);
			});
	}, [categoryId, sortProperty, searchValue, currentPage]);

	const search = items.map(obj => <Card key={obj.id} {...obj} />);

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
			<Pagination onChangePage={number => setCurrentPage(number + 1)} />
		</div>
	);
}
