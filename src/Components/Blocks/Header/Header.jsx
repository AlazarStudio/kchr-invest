import { Link } from 'react-router-dom'

import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'
import Burger from '../Burger/Burger'

import styles from './Header.module.css'

function Header({ children, ...props }) {
	return (
		<header className={styles.header}>
			<CenterBlock>
				<WidthBlock>
					<div className={styles.header_wrapper}>
						<Link to={'/'} className={styles.logo_wrapper}>
							<img src='/images/kchr-logo.jpeg' alt='' />
						</Link>
						<Burger />
						<a
							href='https://map.investkchr.ru/'
							target='_blank'
							className={styles.mapInvest}
							style={{ textTransform: 'uppercase' }}
						>
							Инвестиционная карта
						</a>
					</div>
				</WidthBlock>
			</CenterBlock>
		</header>
	)
}

export default Header
