import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { projects } from '../../../../data'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './ProjectDetail.module.css'

function ProjectDetail() {
	const { id } = useParams()
	const project = projects.find(item => item.id == id)

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' })
	}, [])

	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<p className={styles.proj_title}>{project.title}</p>

					<div className={styles.project_item_wrapper}>
						<div className={styles.project_img}>
							<img src={project.images[0]} alt='' />
						</div>

						<div className={styles.project_info}>
							<div className={styles.project_block1}>
								<div className={styles.block_item}>
									<p className={styles.title}>Место реализации</p>
									<p className={styles.text}>{project.location}</p>
								</div>
								<div className={styles.block_item}>
									<p className={styles.title}>Ожидаемый доход «инвестора» </p>
									<p className={styles.income}>
										{project.expectedIncome} тыс. руб.
									</p>
								</div>
							</div>
							<div className={styles.description}>
								<p className={styles.title}>Описание</p>
								<p className={styles.text}>{project.description}</p>
							</div>
							<div className={styles.description}>
								<p className={styles.title}>Инвестиционные показатели</p>
								<p className={styles.text}>{project.investmentIndicators}</p>
							</div>
						</div>
					</div>

					<p className={styles.subtitle}>
						Производственно-финансовые показатели
					</p>

					<div className={styles.indicators}>
						<div className={styles.indicator_item}>
							<p>Объем производства</p>
							<p>{project.productionVolume} в год</p>
						</div>

						<div className={styles.indicator_item}>
							<p>Годовая выручка после выхода на проектную мощность</p>
							<p>{project.annualRevenue} тыс. руб.</p>
						</div>
					</div>

					<div className={styles.other_info}>
						<div className={styles.info_item}>
							<p className={styles.subtitle}>Структура финансирования</p>
							<p
								dangerouslySetInnerHTML={{
									__html: `${project.financingStructure}`
								}}
							></p>
						</div>

						<div className={styles.info_item}>
							<p className={styles.subtitle}>Налоги и страховые взносы</p>
							<p
								dangerouslySetInnerHTML={{
									__html: `${project.taxesAndInsurance}`
								}}
							></p>
						</div>

						<div className={styles.info_item}>
							<p className={styles.subtitle}>Рабочие места</p>
							<p dangerouslySetInnerHTML={{ __html: `${project.jobs}` }}></p>
						</div>

						<div className={styles.info_item}>
							<p className={styles.subtitle}>Социальный эффект</p>
							<p
								dangerouslySetInnerHTML={{ __html: `${project.socialEffect}` }}
							></p>
						</div>
					</div>
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default ProjectDetail
