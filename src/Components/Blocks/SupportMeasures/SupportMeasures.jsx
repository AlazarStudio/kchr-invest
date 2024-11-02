import axios from 'axios'
import { useEffect, useState } from 'react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import serverConfig from '../../../serverConfig'
import SMItem from '../SMItem/SMItem'

import styles from './SupportMeasures.module.css'

const fetchSM = async () => {
	try {
		const response = await axios.get(`${serverConfig}/support-measures`)
		return response.data
	} catch (error) {
		console.error('Error fetching products:', error)
		return []
	}
}

function SupportMeasures() {
	const [swiper, setSwiper] = useState()
	const [activeIndex, setActiveIndex] = useState(0)

	const [sm, setSM] = useState([])

	useEffect(() => {
		const getProjects = async () => {
			const sm = await fetchSM()
			setSM(sm)
		}
		getProjects()
	}, [])

	return (
		<section className={styles.support_measures}>
			<p className={styles.sm_t} style={{ textTransform: 'uppercase' }}>
				Меры поддержки
			</p>
			<Swiper
				className={styles.sliderBox}
				spaceBetween={70}
				slidesPerView={4}
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40
					},
					1299: {
						slidesPerView: 4,
						spaceBetween: 70
					}
				}}
				direction='horizontal'
				loop={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false
				}}
				modules={[Autoplay]}
				onSwiper={setSwiper}
				onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
			>
				{sm.map(item => (
					<SwiperSlide key={item.id}>
						<SMItem {...item} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.swiper_buttons}>
				<img
					src='/images/prev_slide.png'
					alt=''
					onClick={() => swiper.slidePrev()}
				/>
				<img
					src='/images/next_slide.png'
					alt=''
					onClick={() => swiper.slideNext()}
				/>
			</div>
		</section>
	)
}

export default SupportMeasures
