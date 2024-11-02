import axios from 'axios'
import { useEffect, useState } from 'react'

import serverConfig from '../../../serverConfig'
import ProjectItem from '../../Blocks/ProjectItem/ProjectItem'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './Projects.module.css'

const fetchProjects = async () => {
	try {
		const response = await axios.get(`${serverConfig}/projects`)
		return response.data
	} catch (error) {
		console.error('Error fetching products:', error)
		return []
	}
}

function Projects({ children, ...props }) {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		const getProjects = async () => {
			const projects = await fetchProjects()
			setProjects(projects)
		}
		getProjects()
	}, [])

	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<p className={styles.title} style={{ textTransform: 'uppercase' }}>
						Реализованные проекты
					</p>

					<div className={styles.projects_wrapper}>
						{projects.map(proj => (
							<ProjectItem key={proj.id} {...proj} />
						))}
					</div>
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default Projects
