import { useState } from 'react'

import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './Footer.module.css'

function Footer({ children, ...props }) {
	const [openSection, setOpenSection] = useState(null)

	const toggleSection = section => {
		setOpenSection(openSection === section ? null : section)
	}
	return (
		<footer className={styles.footer}>
			<CenterBlock>
				<WidthBlock>
					<div className={styles.footer_wrapper}>
						<div className={styles.footer_item}>
							<p>Инвесторам</p>
							<a
								href='https://minpromtorgkchr.ru/meryi_gosudarstvennoy_podderjki'
								target='_blank'
							>
								Меры поддержки
							</a>
							<a
								href='/docs/investicionnaya_politika_KRKCHR.rtf'
								target='_blank'
							>
								Инвестиционная политика КРКЧР
							</a>
							<a href='/docs/usloviya_finansirovaniya.docx' target='_blank'>
								Условия финансирования
							</a>
							<a
								href='https://кавказ.рф/investproekty/vsesezonnyy-gornyy-kurort-arkhyz-.html'
								target='_blank'
							>
								Особо экономическая зона
							</a>
						</div>
						<div className={styles.footer_item}>
							<p>Документы</p>
							<a href='/docs/invest_deklaratsia.pdf' target='_blank'>
								Инвестиционная декларация
							</a>
							<a
								href='/docs/svidetelstvo_o_gosudarstvennoj_yuridicheskogo_lica.pdf'
								target='_blank'
							>
								Свидетельство о государственной регистрации юридического лица
							</a>
							<a href='/docs/polozhenie_ob_invest_politike.pdf' target='_blank'>
								Положение об инвестиционной политике
							</a>
						</div>
						<div className={styles.footer_item}>
							<p>Партнеры</p>
							<a href='https://kchr.ru/' target='_blank'>
								Правительство КЧР
							</a>
							<a href='https://кавказ.рф/' target='_blank'>
								Кавказ РФ
							</a>
							<a href='https://asi.ru/' target='_blank'>
								Агентство стратегических инициатив
							</a>
						</div>
						<div className={styles.footer_item}>
							<p>О корпорации</p>
							<a>О регионе</a>
							<a>Контакты</a>
						</div>
					</div>

					<div className={styles.footer_wrapper_mobile}>
						<div className={styles.footer_item_mobile}>
							<p onClick={() => toggleSection('investors')}>
								Инвесторам{' '}
								<span className={styles.arrow}>
									{openSection === 'investors' ? '▲' : '▼'}
								</span>
							</p>
							<div
								className={`${styles.links} ${openSection === 'investors' ? styles.open : ''}`}
							>
								<a
									href='https://minpromtorgkchr.ru/meryi_gosudarstvennoy_podderjki'
									target='_blank'
								>
									Меры поддержки
								</a>
								<a
									href='/docs/investicionnaya_politika_KRKCHR.rtf'
									target='_blank'
								>
									Инвестиционная политика КРКЧР
								</a>
								<a href='/docs/usloviya_finansirovaniya.docx' target='_blank'>
									Условия финансирования
								</a>
								<a
									href='https://кавказ.рф/investproekty/vsesezonnyy-gornyy-kurort-arkhyz-.html'
									target='_blank'
								>
									Особо экономическая зона
								</a>
							</div>
						</div>

						<div className={styles.footer_item_mobile}>
							<p onClick={() => toggleSection('documents')}>
								Документы{' '}
								<span className={styles.arrow}>
									{openSection === 'documents' ? '▲' : '▼'}
								</span>
							</p>
							<div
								className={`${styles.links} ${openSection === 'documents' ? styles.open : ''}`}
							>
								<a href='/docs/invest_deklaratsia.pdf' target='_blank'>
									Инвестиционная декларация
								</a>
								<a
									href='/docs/svidetelstvo_o_gosudarstvennoj_yuridicheskogo_lica.pdf'
									target='_blank'
								>
									Свидетельство о государственной регистрации юридического лица
								</a>
								<a
									href='/docs/polozhenie_ob_invest_politike.pdf'
									target='_blank'
								>
									Положение об инвестиционной политике
								</a>
							</div>
						</div>

						<div className={styles.footer_item_mobile}>
							<p onClick={() => toggleSection('partners')}>
								Партнеры{' '}
								<span className={styles.arrow}>
									{openSection === 'partners' ? '▲' : '▼'}
								</span>
							</p>
							<div
								className={`${styles.links} ${openSection === 'partners' ? styles.open : ''}`}
							>
								<a href='https://kchr.ru/' target='_blank'>
									Правительство КЧР
								</a>
								<a href='https://кавказ.рф/' target='_blank'>
									Кавказ РФ
								</a>
								<a href='https://asi.ru/' target='_blank'>
									Агентство стратегических инициатив
								</a>
							</div>
						</div>

						<div className={styles.footer_item_mobile}>
							<p onClick={() => toggleSection('about')}>
								О корпорации{' '}
								<span className={styles.arrow}>
									{openSection === 'about' ? '▲' : '▼'}
								</span>
							</p>
							<div
								className={`${styles.links} ${openSection === 'about' ? styles.open : ''}`}
							>
								<a>О регионе</a>
								<a>Контакты</a>
							</div>
						</div>
					</div>
				</WidthBlock>
			</CenterBlock>
		</footer>
	)
}

export default Footer