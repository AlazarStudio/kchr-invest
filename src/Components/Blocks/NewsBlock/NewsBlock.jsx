import { useState } from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { news } from '../../../../data'
import NewsItem from '../NewsItem/NewsItem'

import styles from './NewsBlock.module.css'

function NewsBlock({ children, ...props }) {
	const [swiper, setSwiper] = useState()
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<section className={styles.news_section}>
			<div className={styles.news_block__header}>
				<p>НОВОСТИ</p>
				<Link to='/news'>Все новости</Link>
			</div>
			<Swiper
				className={styles.sliderBox}
				spaceBetween={30}
				slidesPerView={3}
				breakpoints={{
					0: {
						slidesPerView: 1
					},
					768: {
						slidesPerView: 2
					},
					1299: {
						slidesPerView: 3
					}
				}}
				direction='horizontal'
				loop={true}
				onSwiper={setSwiper}
				onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
			>
				{news.slice(-3).map((item, index) => (
					<SwiperSlide key={index}>
						<NewsItem {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default NewsBlock
