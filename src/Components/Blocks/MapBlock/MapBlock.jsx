import styles from './MapBlock.module.css'

function MapBlock({ children, ...props }) {
	return (
		<section className={styles.map_section}>
			<p style={{ textTransform: 'uppercase' }}>Территории развития</p>
			<div
				style={{
					position: 'relative',
					overflow: 'hidden',
					borderRadius: '20px'
				}}
			>
				<a
					href='https://yandex.ru/maps/1104/cherkessk/?utm_medium=mapframe&utm_source=maps'
					style={{
						color: '#eee',
						fontSize: '12px',
						position: 'absolute',
						top: '0px'
					}}
				>
					Черкесск
				</a>
				<a
					href='https://yandex.ru/maps/1104/cherkessk/house/ulitsa_kalantayevskogo_36/YEsYdgJjSUcFQFpufX5zcH9gZw==/?ll=42.053022%2C44.221333&utm_medium=mapframe&utm_source=maps&z=17.13'
					style={{
						color: '#eee',
						fontSize: '12px',
						position: 'absolute',
						top: '14px'
					}}
				>
					Улица Калантаевского, 36 — Яндекс Карты
				</a>
				<iframe
					src='https://yandex.ru/map-widget/v1/?ll=42.053022%2C44.221333&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTAxOTAyNTQ2EokB0KDQvtGB0YHQuNGPLCDQmtCw0YDQsNGH0LDQtdCy0L4t0KfQtdGA0LrQtdGB0YHQutCw0Y8g0KDQtdGB0L_Rg9Cx0LvQuNC60LAsINCn0LXRgNC60LXRgdGB0LosINGD0LvQuNGG0LAg0JrQsNC70LDQvdGC0LDQtdCy0YHQutC-0LPQviwgMzYiCg1MNihCFaXiMEI%2C&z=17.13'
					width='100%'
					height='450'
					frameBorder='0'
					allowFullScreen={true}
					style={{ position: 'relative' }}
				></iframe>
			</div>
		</section>
	)
}

export default MapBlock
