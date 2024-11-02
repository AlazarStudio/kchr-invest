import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom'

import serverConfig from '../../../serverConfig'
import NewsItem from '../../Blocks/NewsItem/NewsItem'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './NewsPage.module.css'

const fetchNews = async () => {
	try {
		const response = await axios.get(`${serverConfig}/news`)
		return response.data
	} catch (error) {
		console.error('Error fetching products:', error)
		return []
	}
}

function NewsPage({ children, ...props }) {
	const [searchParams, setSearchParams] = useSearchParams()
	const newsRef = useRef(null)
	const [news, setNews] = useState([])
	const [sortOrder, setSortOrder] = useState('newest') // состояние для порядка сортировки

	useEffect(() => {
		const getNews = async () => {
			const news = await fetchNews()
			setNews(news)
		}
		getNews()
	}, [])

	const page = parseInt(searchParams.get('page')) || 1
	const itemsPerPage = 9
	const pageCount = Math.ceil(news.length / itemsPerPage)
	const safePage = Math.min(page, pageCount)
	const [currentPage, setCurrentPage] = useState(safePage - 1)

	// Сортируем новости в зависимости от порядка сортировки
	const sortedNews = [...news].sort((a, b) => {
		if (sortOrder === 'newest') {
			return new Date(b.date) - new Date(a.date) // Сначала новые
		} else {
			return new Date(a.date) - new Date(b.date) // Сначала старые
		}
	})

	const displayNews = sortedNews.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage
	)

	const handlePageClick = ({ selected }) => {
		setSearchParams({ page: selected + 1 })
		setCurrentPage(selected)
		if (newsRef.current) {
			newsRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleSortChange = e => {
		setSortOrder(e.target.value)
		setCurrentPage(0) // Сбрасываем на первую страницу после изменения сортировки
		setSearchParams({ page: 1 })
	}

	useEffect(() => {
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
							<select
								name='sortOrder'
								value={sortOrder}
								onChange={handleSortChange}
							>
								<option value='newest'>Сначала новые</option>
								<option value='oldest'>Сначала старые</option>
							</select>
						</div>
					</div>

					<div className={styles.news_wrapper}>
						{displayNews.map(item => (
							<NewsItem key={item.id} {...item} />
						))}
					</div>

					{news.length > itemsPerPage && (
						<ReactPaginate
							previousLabel={<p style={{ fontSize: '24px' }}>&#8592;</p>}
							nextLabel={<p style={{ fontSize: '24px' }}>&#8594;</p>}
							breakLabel={'...'}
							pageCount={pageCount}
							forcePage={currentPage}
							marginPagesDisplayed={2}
							pageRangeDisplayed={3}
							onPageChange={handlePageClick}
							containerClassName={styles.pagination}
							pageClassName={styles.page}
							previousClassName={styles.next_prev}
							nextClassName={styles.next_prev}
							activeClassName={styles.active}
						/>
					)}
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default NewsPage
