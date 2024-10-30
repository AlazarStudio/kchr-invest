import { projects } from '../../../../data'
import ProjectItem from '../../Blocks/ProjectItem/ProjectItem'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './Projects.module.css'

function Projects({ children, ...props }) {
	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<p className={styles.title} style={{ textTransform: 'uppercase' }}>
						Реализованные проекты
					</p>

					<div className={styles.projects_wrapper}>
						{projects.map((proj, index) => (
							<ProjectItem key={index} {...proj} />
						))}
					</div>
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default Projects
