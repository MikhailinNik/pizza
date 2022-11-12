import axios from 'axios';
import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

import styles from './FullCard.module.scss';

export default function FullCard() {
	const { id } = useParams();
	const location = useLocation();
	console.log(location);

	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		try {
			const fetchData = async () => {
				const { data } = await axios.get(`http://localhost:3001/data/${id}`);

				return setData(data);
			};

			fetchData();
		} catch (error) {
			alert('Произошла ошибка');
		}
	}, []);

	console.log(data);

	if (!data) {
		alert('Упс...');
		location.pathname = '/';
	}

	return (
		<div className={styles.root}>
			<h2>{data.title}</h2>
			<img src={data.imageUrl} alt="" />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eius corrupti animi
				quasi assumenda consequuntur dolorem molestiae atque. Iure atque voluptatem, at velit
				laboriosam commodi sit provident deleniti facilis saepe!
			</p>
			<div className={styles.price}>от {data.price} ₽</div>

			<Link to="/" className="button button--black">
				<span>Вернуться назад</span>
			</Link>
		</div>
	);
}
