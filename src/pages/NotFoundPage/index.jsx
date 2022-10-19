import React from 'react';
import styles from './NotFound.module.scss';

export default function NotFoundPage() {
	return (
		<div className={styles.root}>
			<h1>
				😧
				<br />
				<span>Страница не найдена</span>
			</h1>
			<p>К сожалению, данная страница отсутствует...</p>
			<p>Приносим свои извинения</p>
		</div>
	);
}
