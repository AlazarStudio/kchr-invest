import uploadsConfig from '../../../uploadsConfig'

import styles from './SMItem.module.css'

function SMItem({ ...props }) {
	return (
		<div className={styles.sm_item}>
			<img src={`${uploadsConfig}${props.images}`} alt='' />
			<p>{props.title}</p>
		</div>
	)
}

export default SMItem
