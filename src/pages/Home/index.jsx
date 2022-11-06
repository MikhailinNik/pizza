import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter, setCurrentPage } from '../../redux/slices/filterSlice';
import { fetchUserById, selectData } from '../../redux/slices/dataSlice';

import Categories from '../../components/Categories';
import Sort from '../../components/Sort';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';

import styles from './Home.module.scss';

export default function Home() {
	const dispatch = useDispatch();

	const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
	const { items, status } = useSelector(selectData);

	const onChangeCurrentPage = number => {
		dispatch(setCurrentPage(number));
	};

	const fetchData = async () => {
		const isCategory = categoryId > 0 ? `category=${categoryId}` : '';
		const isSort = `_sort=${sort.sortProperty}&_order=desc`;
		const isSearch = searchValue ? `&q=${searchValue.toLowerCase()}` : '';

		dispatch(
			fetchUserById({
				isCategory,
				isSort,
				isSearch,
				currentPage,
			}),
		);
	};

	React.useEffect(() => {
		fetchData();
	}, [categoryId, sort.sortProperty, searchValue, currentPage]);

	const cards = items.map(obj => <Card key={obj.id} {...obj} />);

	const showLoadingOrCards = () => {
		return (
			<div className={styles.content}>
				<div className="content__items">
					{status === 'loading'
						? [...new Array(6)].map((_, index) => <Loading key={index} />)
						: cards}
				</div>
			</div>
		);
	};

	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>

			<h2 className="content__title">Все пиццы</h2>
			{status === 'error' ? (
				<div className="content__error">
					<h2>Произошла ошибка</h2>
					<p>Пожалуйста повторите попытку</p>
					<button onClick={showLoadingOrCards} className="button button--outline button--add">
						<span>Повторить</span>
					</button>
				</div>
			) : (
				showLoadingOrCards()
			)}

			<Pagination currentPage={currentPage} onChangePage={number => onChangeCurrentPage(number)} />
		</div>
	);
}
