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
