import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

export default function Pagination({ onChangePage }) {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel="..."
			nextLabel="next"
			onPageChange={evt => onChangePage(evt.selected)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel="prev"
			renderOnZeroPageCount={null}
		/>
	);
}
