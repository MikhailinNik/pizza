import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export default function Categories() {
	const categoryId = useSelector(state => state.filter.categoryId);
	const dispatch = useDispatch();

	return (
		<div className="categories">
			<ul>
				{categories.map((item, index) => {
					return (
						<li
							key={index}
							className={categoryId === index ? 'active' : ''}
							onClick={() => dispatch(setCategoryId(index))}>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
