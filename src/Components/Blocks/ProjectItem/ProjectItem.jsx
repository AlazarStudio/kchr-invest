import { Link } from 'react-router-dom'

import styles from './ProjectItem.module.css'

function ProjectItem({ children, ...props }) {
	return (
		<Link
			to={`/completed-projects/${props.id}`}
			className={styles.project_item_wrapper}
		>
			<div className={styles.project_img}>
				<img src={props.images[0]} alt='' />
			</div>

			<div className={styles.project_info}>
				<p className={styles.project_title}>{props.title}</p>
				<div className={styles.project_block1}>
					<div className={styles.block_item}>
						<p className={styles.title}>Место реализации</p>
						<p className={styles.text}>{props.location}</p>
					</div>
					<div className={styles.block_item}>
						<p className={styles.title}>Ожидаемый доход «инвестора» </p>
						<p className={styles.income}>{props.expectedIncome} тыс. руб.</p>
					</div>
				</div>
				<div className={styles.description}>
					<p className={styles.title}>Описание</p>
					<p className={styles.text}>{props.description}</p>
				</div>
			</div>
		</Link>
	)
}

export default ProjectItem
