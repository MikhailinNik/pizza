import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryId, setCategoryId } from '../redux/slices/filterSlice';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export default function Categories() {
	const categoryId = useSelector(selectCategoryId);
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
