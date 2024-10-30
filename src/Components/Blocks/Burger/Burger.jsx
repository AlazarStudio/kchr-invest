import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { navItems } from '../../../../data'

import styles from './Burger.module.css'

function Burger({ children, ...props }) {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef(null)

	const toggleMenu = () => {
		setIsOpen(prevIsOpen => {
			// console.log('Current state:', prevIsOpen)
			return !prevIsOpen
		})
	}

	const handleClickOutside = event => {
		if (
			menuRef.current &&
			!menuRef.current.contains(event.target) &&
			event.target !== document.querySelector(`.${styles.burger_icon}`)
		) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])
	return (
		<>
			<div className={styles.burger_icon} onClick={toggleMenu}>
				&#9776;
			</div>
			<nav
				ref={menuRef}
				className={`${styles.nav} ${isOpen ? styles.open : styles.closed}`}
			>
				<ul className={styles.nav_list}>
					{navItems.map((item, index) => (
						<NavLink
							key={index}
							to={item.link}
							className={({ isActive }) =>
								isActive
									? `${styles.nav_item} ${styles.active}`
									: styles.nav_item
							}
							onClick={() => setIsOpen(false)}
						>
							<li>{item.title}</li>
						</NavLink>
					))}
				</ul>
			</nav>
		</>
	)
}

export default Burger
