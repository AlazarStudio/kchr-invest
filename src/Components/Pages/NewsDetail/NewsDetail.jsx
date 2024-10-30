import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useParams } from 'react-router-dom'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { news } from '../../../../data'
import uploadsConfig from '../../../uploadsConfig'
import NewsItem from '../../Blocks/NewsItem/NewsItem'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './NewsDetail.module.css'

Modal.setAppElement('#root')

function NewsDetail({ children, ...props }) {
	const { id } = useParams()
	const [selectedImage, setSelectedImage] = useState(null)
	const [swiper, setSwiper] = useState()
	const [activeIndex, setActiveIndex] = useState(0)

	const openModal = img => {
		setSelectedImage(img)
	}

	const closeModal = () => {
		setSelectedImage(null)
	}

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' })
	}, [])

	const article = news.find(item => item.id == id)
	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<div className={styles.article_header}>
						<p>{article.title}</p>
						<p>{article.date}</p>
					</div>
					<p
						className={styles.article_text}
						dangerouslySetInnerHTML={{ __html: `${article.text}` }}
					></p>

					<div className={styles.article_images}>
						{article.images &&
							Array.isArray(article.images) &&
							article.images.map((img, index) => (
								<img
									key={index}
									src={img}
									// src={`${uploadsConfig}${img}`}
									alt=''
									className={styles.image_thumbnail}
									onClick={() => openModal(img)}
								/>
							))}
					</div>

					<Modal
						isOpen={!!selectedImage}
						onRequestClose={closeModal}
						contentLabel='Просмотр изображения'
						className={styles.modal_content}
						overlayClassName={styles.modal_overlay}
					>
						<img
							// src={`${uploadsConfig}${selectedImage}`}
							src={selectedImage}
							alt=''
							className={styles.modal_image}
						/>
						<button className={styles.close_button} onClick={closeModal}>
							x
						</button>
					</Modal>

					<p className={styles.seeAlso} style={{ textTransform: 'uppercase' }}>
						смотрите также
					</p>

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
							<SwiperSlide
								key={index}
								onClick={() => {
									window.scrollTo({ top: 0, behavior: 'instant' })
								}}
							>
								<NewsItem {...item} />
							</SwiperSlide>
						))}
					</Swiper>
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default NewsDetail
