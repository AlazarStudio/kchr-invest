import { statData } from '../../../../data'
import StatItem from '../StatItem/StatItem'

import styles from './StatData.module.css'

function StatData({ children, ...props }) {
	return (
		<section className={styles.stat_data__section}>
			{statData.map((item, index) => (
				<StatItem key={index} {...item} />
			))}
		</section>
	)
}

export default StatData
