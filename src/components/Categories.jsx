import React from 'react';

export default function Categories() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

	return (
		<div className="categories">
			<ul>
				{categories.map((item, index) => {
					return (
						<li
							className={activeIndex === index ? 'active' : ''}
							onClick={() => setActiveIndex(index)}>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
