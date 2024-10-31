import styles from './BusinessCard.module.css'

function BusinessCard({ children, ...props }) {
	return (
		<section className={styles.video_section}>
			<p style={{ textTransform: 'uppercase' }}>
				Инвестиционная визитка региона
			</p>
			<iframe
				className={styles.video}
				src='https://drive.google.com/file/d/1a-G-8yTR4gIhU0zj6kv9LvYEHF9zUehZ/preview'
				width='100%'
				// height='480'
				allow='autoplay'
			></iframe>
		</section>
	)
}

export default BusinessCard
