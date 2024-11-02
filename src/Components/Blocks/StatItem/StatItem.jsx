import { useEffect, useState } from 'react'

import styles from './StatItem.module.css'

function StatItem({ value, measure, title }) {
	const isPercentage = typeof value === 'string' && value.endsWith('%')
	const numericValue = isPercentage ? parseFloat(value) : value
	const [displayValue, setDisplayValue] = useState(isPercentage ? '0%' : 0)

	useEffect(() => {
		let startValue = 0
		const duration = 2000 // Продолжительность анимации в миллисекундах
		const increment = numericValue / (duration / 20) // Шаг увеличения значения

		const counter = setInterval(() => {
			startValue += increment
			if (startValue >= numericValue) {
				clearInterval(counter)
				setDisplayValue(isPercentage ? `${numericValue}%` : numericValue) // Устанавливаем конечное значение
			} else {
				const animatedValue = Math.ceil(startValue)
				setDisplayValue(isPercentage ? `${animatedValue}%` : animatedValue) // Добавляем `%`, если это процент
			}
		}, 20) // Частота обновления каждые 20 мс

		return () => clearInterval(counter) // Очищаем интервал при размонтировании
	}, [numericValue, isPercentage])

	return (
		<div className={styles.stat_item}>
			<p>{displayValue}</p>
			<p>{measure}</p>
			<p style={{ textTransform: 'uppercase' }}>{title}</p>
		</div>
	)
}

export default StatItem
