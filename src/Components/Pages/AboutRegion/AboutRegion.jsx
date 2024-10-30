import { aboutRegion } from '../../../../data'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './AboutRegion.module.css'

function AboutRegion({ children, ...props }) {
	return (
		<main className={styles.main}>
			<div className={styles.region_banner}>
				<div className={styles.item1}>
					<div className={styles.gerb}>
						<img src='/images/gerb.png' alt='' />
					</div>
					<div className={styles.item1_text}>
						<p style={{ textTransform: 'uppercase' }}>
							Карачаево-Черкесская Республика
						</p>
						<p>субъект Российской Федерации, республика в её составе.</p>
					</div>
					<img
						className={styles.background_img}
						src='/images/map_region.png'
						alt=''
					/>
				</div>
				<div className={styles.item2}>
					<p className={styles.item2_title}>О РЕГИОНЕ</p>
					<div className={styles.item2_content}>
						<div className={styles.content_item}>
							<p>Столица</p>
							<p>Черкесск</p>
						</div>

						<div className={styles.content_item}>
							<p>Население</p>
							<p>{aboutRegion[0].population}</p>
						</div>

						<div className={styles.content_item}>
							<p>Государственные языки</p>
							<div>
								КАРАЧАЕВСКИЙ <br />
								РУССКИЙ <br />
								ЧЕРКЕССКИЙ <br />
								АБАЗИНСКИЙ <br />
								НОГАЙСКИЙ <br />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.text_wrapper}>
				<p className={styles.text}>{aboutRegion[0].text}</p>
			</div>
		</main>
	)
}

export default AboutRegion
