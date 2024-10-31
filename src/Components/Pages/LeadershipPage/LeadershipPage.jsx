import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './LeadershipPage.module.css'

function LeadershipPage({ children, ...props }) {
	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<p className={styles.title} style={{ textTransform: 'uppercase' }}>
						Руководство
					</p>

					<div className={styles.info_block}>
						<div className={styles.info_block__item}>
							<img src='/images/director.png' alt='' />
							<div className={styles.director_name}>
								<p style={{ textTransform: 'uppercase' }}>
									Батдыев Марат Мустафаевич
								</p>
								<p>Генеральный директор АО «Корпорация Развития КЧР»</p>
							</div>
						</div>
						<p className={styles.director_info}>
							Родился 21 июня 1979 г. в г. Черкесск Ставропольского края. <br />
							<br />
							В 2000 г. окончил Московский государственный университет имени
							М.В. Ломоносова, бакалавр экономики, в 2010 г. -
							Карачаево-Черкесский филиал Московской открытой социальной
							академии по специальности «юриспруденция». <br />
							<br />
							С 2001 по 2002 гг. - экономист 1 категории отдела развития рынка
							сжиженного газа и внедрения энергсберегающих технологий ОАО
							«Регионгазхолдинг». <br />
							<br />
							С 2002 по 2003 гг. - старший экономист, генеральный директор ООО
							«Такеши». <br />
							<br />
							С 2003 по 2004 гг. – начальник отдела по работе с кадрами ГУ по
							кадровой политике, организационной работе и связям с органами
							местного самоуправления Управления делами Президента и
							Правительства КЧР, начальник Управления Президента КЧР по
							инвестиционной политике и внешним связям. <br />
							<br />
							С 2004 по 2007 гг. - заместитель управляющего филиала ОАО «МИнБ» в
							г. Черкесске. <br />
							<br />
							С 2007 по 2015 гг. – директор, советник
							директора.Карачаево-Черкесского регионального филиала ОАО
							«Россельхозбанк». <br />
							<br />
							С 2015 г. – 2020 гг.директор по развитию ООО «Юг-Трейд» <br />
							<br />С 2020 г. - Генеральный директор АО «Корпорация Развития
							КЧР» Депутат Думы МО. г. Черкесска
						</p>
					</div>
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default LeadershipPage
