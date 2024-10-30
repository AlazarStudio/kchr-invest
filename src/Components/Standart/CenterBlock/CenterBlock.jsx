<<<<<<< HEAD
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
=======
import React from "react";
import classes from './CenterBlock.module.css';

function CenterBlock({ children, ...props }) {
    return ( 
        <>
            <div {...props} className={classes.CenterBlock} style={{
                width: props.width,
                height: props.height,
                gap: props.gap,
                background: `url(${props.background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: props.margin,
                padding: props.padding,
            }}>
                {children}
            </div>
        </>
     );
}

export default CenterBlock;
>>>>>>> 882cfeab6b7575d14f774e433503edade9c06a71
