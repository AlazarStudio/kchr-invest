import axios from 'axios'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useParams } from 'react-router-dom'

import serverConfig from '../../../serverConfig'
import uploadsConfig from '../../../uploadsConfig'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './ProjectDetail.module.css'

Modal.setAppElement('#root')

function ProjectDetail() {
	const { id } = useParams()
	const [project, setProject] = useState({})
	// const project = projects.find(item => item.id == id)
	const [selectedImage, setSelectedImage] = useState(null)

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(
					`${serverConfig}/projects/${parseInt(id)}`
				)
				setProject(response.data)
			} catch (error) {
				console.error('Error fetching news:', error)
			}
		}
		fetchNews()
	}, [id])

	const openModal = img => {
		setSelectedImage(img)
	}

	const closeModal = () => {
		setSelectedImage(null)
	}

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
							<img
								src={`${uploadsConfig}${
									project.images &&
									Array.isArray(project.images) &&
									project.images[0]
								}`}
								alt=''
							/>
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
										{project.expectedIncome &&
											project.expectedIncome
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
										тыс. руб.
									</p>
								</div>
							</div>
							<div className={styles.description}>
								<p className={styles.title}>Описание</p>
								<p className={styles.text}>{project.description}</p>
							</div>
							<div className={styles.description}>
								<p className={styles.title}>Инвестиционные показатели</p>
								<p
									className={styles.text}
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(project.investmentIndicators)
									}}
								></p>
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
							<p>
								{project.annualRevenue &&
									project.annualRevenue
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
								тыс. руб.
							</p>
						</div>
					</div>

					<div className={styles.other_info}>
						<div className={styles.info_item}>
							<p className={styles.subtitle}>Структура финансирования</p>
							<p
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(project.financingStructure)
								}}
							></p>
						</div>

						<div className={styles.info_item}>
							<p className={styles.subtitle}>Налоги и страховые взносы</p>
							<p
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(project.taxesAndInsurance)
								}}
							></p>
						</div>

						<div className={styles.info_item}>
							<p className={styles.subtitle}>Рабочие места</p>
							<p
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(project.jobs)
								}}
							></p>
						</div>

						<div className={styles.info_item}>
							<p className={styles.subtitle}>Социальный эффект</p>
							<p
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(project.socialEffect)
								}}
							></p>
						</div>
					</div>

					{Array.isArray(project.images) && project.images.length > 1 ? (
						<div className={styles.article_images}>
							{project.images &&
								Array.isArray(project.images) &&
								project.images.map((img, index) => (
									<img
										key={index}
										// src={img}
										src={`${uploadsConfig}${img}`}
										alt=''
										className={styles.image_thumbnail}
										onClick={() => openModal(img)}
									/>
								))}
						</div>
					) : null}

					<Modal
						isOpen={!!selectedImage}
						onRequestClose={closeModal}
						contentLabel='Просмотр изображения'
						className={styles.modal_content}
						overlayClassName={styles.modal_overlay}
					>
						<img
							src={`${uploadsConfig}${selectedImage}`}
							// src={selectedImage}
							alt=''
							className={styles.modal_image}
						/>
						<button className={styles.close_button} onClick={closeModal}>
							x
						</button>
					</Modal>
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default ProjectDetail
