import styles from './ContactItem.module.css'

function ContactItem({ ...props }) {
	return (
		<a href={props.link} target='_blank' className={styles.contact_item}>
			<img src={props.img} alt='' />
			<div className={styles.contact_item__text}>
				<p className={styles.title_}>{props.title}</p>
				{props.value === '' ? null : <p>{props.value}</p>}
			</div>
		</a>
	)
}

export default ContactItem
