import { Link } from 'react-router-dom'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './MainBanner.module.css'

function MainBanner({ children, ...props }) {
	return (
		<div className={styles.main_banner}>
			<div className={styles.main_info}>
				<p>КОРПОРАЦИЯ РАЗВИТИЯ КАРАЧАЕВО-ЧЕРКЕССКОЙ РЕСПУБЛИКИ</p>
				<p>
					Мы сопровождаем инвестиционные проекты по принципу «одного окна»,
					минимизируем риски и экономим время инвестора, предоставляем
					отраслевую аналитику, консультируем инвестора по мерам государственной
					поддержки, подбираем площадки для реализации проекта.
				</p>

				<Link to={'/completed-projects'}>Узнать больше</Link>
			</div>
			<div className={styles.item}>
				<img src="/images/gray.png" alt="" />
			</div>
		</div>
		// <CenterBlock
		// 	backgroundColor='var(--secondaryColor)'
		// 	background='/images/gray.png'
		// 	backgroundPosition='right -20% center'
		// 	backgroundSize='62%'
		// 	// filter='brightness(60%)'
		// >
		// 	<WidthBlock>
		// 		<div className={styles.main_info}>
		// 			<p>КОРПОРАЦИЯ РАЗВИТИЯ КАРАЧАЕВО-ЧЕРКЕССКОЙ РЕСПУБЛИКИ</p>
		// 			<p>
		// 				Мы сопровождаем инвестиционные проекты по принципу «одного окна»,
		// 				минимизируем риски и экономим время инвестора, предоставляем
		// 				отраслевую аналитику, консультируем инвестора по мерам
		// 				государственной поддержки, подбираем площадки для реализации
		// 				проекта.
		// 			</p>

		// 			<button>Узнать больше</button>
		// 		</div>
		// 	</WidthBlock>
		// </CenterBlock>
	)
}

export default MainBanner
