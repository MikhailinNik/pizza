import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

export default function Pagination({ currentPage, onChangePage }) {
	return (
		<ReactPaginate
			className={styles.root}
			forcePage={currentPage - 1}
			breakLabel="..."
			nextLabel="next"
			onPageChange={evt => onChangePage(evt.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			previousLabel="prev"
			renderOnZeroPageCount={null}
		/>
	);
}
