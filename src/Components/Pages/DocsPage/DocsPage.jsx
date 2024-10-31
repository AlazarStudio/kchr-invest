import { investCategories, investDocs } from '../../../../data'
import DocumentItem from '../../Blocks/DocumentItem/DocumentItem'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './DocsPage.module.css'

function DocsPage() {
	const hasDocuments = groupId => {
		return investDocs.some(item => item.categoryId === groupId)
	}
	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<p className={styles.title} style={{ textTransform: 'uppercase' }}>
						Документы
					</p>
					{investCategories
						.filter(group => hasDocuments(group.id))
						.map(group => (
							<div key={group.id} className={styles.group_wrapper}>
								<p className={styles.category_title}>{group.title}</p>
								<div className={styles.docs_wrapper}>
									{investDocs.map(item =>
										item.categoryId == group.id ? (
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

export default DocsPage
