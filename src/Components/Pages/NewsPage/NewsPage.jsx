import { useEffect, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom'

import { news } from '../../../../data'
import NewsItem from '../../Blocks/NewsItem/NewsItem'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './NewsPage.module.css'

function NewsPage({ children, ...props }) {
	const [searchParams, setSearchParams] = useSearchParams()
	const newsRef = useRef(null)

	const page = parseInt(searchParams.get('page')) || 1

	const itemsPerPage = 9
	const pageCount = Math.ceil(news.length / itemsPerPage)

	const safePage = Math.min(page, pageCount)

	const [currentPage, setCurrentPage] = useState(safePage - 1)

	const displayNews = news.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage
	)

	const handlePageClick = ({ selected }) => {
		setSearchParams({ page: selected + 1 })
		setCurrentPage(selected) // Обновляем состояние currentPage
		if (newsRef.current) {
			newsRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		// Обновляем currentPage при изменении параметра страницы
		setCurrentPage(safePage - 1)
	}, [safePage])

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' })
	}, [])
	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<p className={styles.title} ref={newsRef}>
						НОВОСТИ
					</p>
					<div className={styles.filters}>
						<div className={styles.filter_item}>
							<p>Сортировка:</p>
							<select name='' id=''>
								<option value='' defaultValue>
									Сначала новые
								</option>
								<option value=''>Сначала старые</option>
							</select>
						</div>
						<div className={styles.filter_item}>
							<input type='date' />
						</div>
					</div>

					<div className={styles.news_wrapper}>
						{displayNews.map((item, index) => (
							<NewsItem key={index} {...item} />
						))}
					</div>

					<ReactPaginate
						previousLabel={<p style={{ fontSize: '24px' }}>&#8592;</p>}
						nextLabel={<p style={{ fontSize: '24px' }}>&#8594;</p>}
						breakLabel={'...'}
						pageCount={pageCount}
						forcePage={currentPage} // Используем currentPage без -1
						marginPagesDisplayed={2}
						pageRangeDisplayed={3}
						onPageChange={handlePageClick}
						containerClassName={styles.pagination}
						pageClassName={styles.page}
						previousClassName={styles.next_prev}
						nextClassName={styles.next_prev}
						activeClassName={styles.active}
					/>
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default NewsPage
