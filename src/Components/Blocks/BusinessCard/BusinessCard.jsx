import styles from './BusinessCard.module.css'

function BusinessCard({ children, ...props }) {
	return (
		<section className={styles.video_section}>
			<p style={{ textTransform: 'uppercase' }}>
				Инвестиционная визитка региона
			</p>
			<video className={styles.video} controls width='100%'>
				<source src='/video/render_title.mp4' type='video/mp4'/>
			</video>
		</section>
	)
}

export default BusinessCard
