import styles from './StatItem.module.css'

function StatItem({ ...props }) {
	return (
		<div className={styles.stat_item}>
			<p>{props.value}</p>
			<p>{props.measure}</p>
			<p style={{ textTransform: 'uppercase' }}>{props.title}</p>
		</div>
	)
}

export default StatItem
