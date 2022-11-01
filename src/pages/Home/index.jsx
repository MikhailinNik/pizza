import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { setCurrentPage } from '../../redux/slices/filterSlice';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { SearchContext } from '../../App';

import styles from './Home.module.scss';

export default function Home() {
	const dispatch = useDispatch();
	const { categoryId, sort, currentPage } = useSelector(state => state.filter);
	const { searchValue } = React.useContext(SearchContext);
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const onChangeCurrentPage = number => {
		dispatch(setCurrentPage(number));
	};

	React.useEffect(() => {
		const isCategory = categoryId > 0 ? `category=${categoryId}` : '';
		const isSort = `_sort=${sort.sortProperty}&_order=desc`;
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
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	const cards = items.map(obj => <Card key={obj.id} {...obj} />);

	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className={styles.content}>
				<div className="content__items">
					{isLoading ? [...new Array(6)].map((_, index) => <Loading key={index} />) : cards}
				</div>
			</div>
			<Pagination currentPage={currentPage} onChangePage={number => onChangeCurrentPage(number)} />
		</div>
	);
}
