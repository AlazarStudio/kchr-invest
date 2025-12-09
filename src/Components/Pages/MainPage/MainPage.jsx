import { useEffect } from 'react'

import BusinessCard from '../../Blocks/BusinessCard/BusinessCard'
import MainBanner from '../../Blocks/MainBanner/MainBanner'
import MapBlock from '../../Blocks/MapBlock/MapBlock'
import NewsBlock from '../../Blocks/NewsBlock/NewsBlock'
import StatData from '../../Blocks/StatData/StatData'
import SupportMeasures from '../../Blocks/SupportMeasures/SupportMeasures'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './MainPage.module.css'

function MainPage() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' })
	}, [])

	return (
		<main className={styles.main}>
			<MainBanner />
			<CenterBlock>
				<WidthBlock>
					<StatData />
					<div className='banner-pb_wrapper'>
						<div className='banner-pb_container'>
							<div className='banner-pb_image'></div>
							<div className='banner-pb_content'>
								<div className='banner-pb_content__info'>
									<p className='banner-pb_content__title'>
										Вопросы по реализации инвестиционного проекта?
									</p>
									<p className='banner-pb_content__subtitle'>
										Ответим в кратчайшие сроки
									</p>
									{/* <p className='banner-pb_content__title'>
										Возникли трудности при ведении бизнеса в регионе?
									</p>
									<p className='banner-pb_content__subtitle'>
										Напишите, чтобы быстро получить ответ
									</p> */}
								</div>
								<div className='banner-pb_content__link'>
									<a
										rel='noopener'
										href='https://www.gosuslugi.ru/help/obratitsya_business'
										target='_blank'
									>
										<div className='banner-pb_button'>Написать</div>
									</a>
									<img className='banner-pb_icon' src='/images/gosuslugi.svg' />
								</div>
							</div>
						</div>
					</div>

					<picture
						onClick={() =>
							window.open(
								'https://наследие.дом.рф/?utm_source=partners&utm_medium=referral&utm_campaign=OKN_brand&utm_content=banners&utm_term=11_2025',
								'_blank'
							)
						}
						style={{ cursor: 'pointer' }}
					>
						<source
							media='(min-width: 1300px)'
							srcSet='/images/naseleniye.png'
						/>
						<source
							media='(min-width: 800px)'
							srcSet='/images/naseleniyePlan.png'
						/>
						<source
							media='(max-width: 799px)'
							srcSet='/images/naseleniyeMobile.png'
						/>
						<img src='/images/naseleniye.png' alt='' />
					</picture>

					<a
						href='docs/catalog_prom_product_2024_razvoroty.pdf'
						target='_blank'
						className={styles.catalog_banner}
					>
						<img src='images/catalog_banner.png' alt='' />
					</a>
					<SupportMeasures />
					<BusinessCard />
					<NewsBlock />
					<MapBlock />
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default MainPage
