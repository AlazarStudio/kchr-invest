import styles from './CenterBlock.module.css'

function CenterBlock({
	children,
	width,
	height,
	minHeight,
	gap,
	background,
	backgroundPosition,
	backgroundRepeat,
	backgroundSize,
	backgroundColor,
	backgroundBlendMode,
	filter,
	margin,
	padding,
	opacity,
	borderBottomRightRadius,
	borderBottomLeftRadius,
	...props
}) {
	return (
		<>
			<div
				{...props}
				className={styles.CenterBlock}
				style={{
					overflow: 'hidden',
					width: width,
					height: height,
					minHeight: minHeight,
					gap: gap,
					background: `url(${background})`,
					backgroundPosition: backgroundPosition,
					backgroundRepeat: 'no-repeat',
					backgroundSize: backgroundSize,
					filter: filter,
					backgroundColor: backgroundColor,
					backgroundBlendMode: backgroundBlendMode,
					margin: margin,
					padding: padding,
					opacity: opacity,
					borderBottomRightRadius: borderBottomRightRadius,
					borderBottomLeftRadius: borderBottomLeftRadius
				}}
			>
				{children}
			</div>
		</>
	)
}

export default CenterBlock
