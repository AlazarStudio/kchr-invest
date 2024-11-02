import axios from 'axios'
import { useEffect, useState } from 'react'

import { investCategories, investDocs } from '../../../../data'
import serverConfig from '../../../serverConfig'
import DocumentItem from '../../Blocks/DocumentItem/DocumentItem'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './InvestorsPage.module.css'

const fetchDocs = async () => {
	try {
		const response = await axios.get(`${serverConfig}/invest-docs`)
		return response.data
	} catch (error) {
		console.error('Error fetching products:', error)
		return []
	}
}

const fetchDocsGroup = async () => {
	try {
		const response = await axios.get(`${serverConfig}/invest-group`)
		return response.data
	} catch (error) {
		console.error('Error fetching products:', error)
		return []
	}
}

function InvestorsPage() {
	const [docs, setDocs] = useState([])
	const [groups, setGroups] = useState([])

	useEffect(() => {
		const getDocs = async () => {
			const docs = await fetchDocs()
			setDocs(docs)
		}
		getDocs()
	}, [])

	useEffect(() => {
		const getGroups = async () => {
			const groups = await fetchDocsGroup()
			setGroups(groups)
		}
		getGroups()
	}, [])

	const hasDocuments = groupId => {
		return docs.some(item => item.groupId === groupId)
	}
	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<p className={styles.title} style={{ textTransform: 'uppercase' }}>
						Документы инвесторам
					</p>
					{groups
						.filter(group => hasDocuments(group.id))
						.map(group => (
							<div key={group.id} className={styles.group_wrapper}>
								<p className={styles.category_title}>{group.title}</p>
								<div className={styles.docs_wrapper}>
									{docs.map(item =>
										item.groupId == group.id ? (
											<DocumentItem key={item.id} {...item} />
										) : null
									)}
								</div>
							</div>
						))}
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default InvestorsPage
