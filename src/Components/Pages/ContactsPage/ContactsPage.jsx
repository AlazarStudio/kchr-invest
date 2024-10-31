import { useState } from 'react'

import ContactsBlock from '../../Blocks/ContactsBlock/ContactsBlock'
import CenterBlock from '../../Standart/CenterBlock/CenterBlock'
import WidthBlock from '../../Standart/WidthBlock/WidthBlock'

import styles from './ContactsPage.module.css'

function ContactsPage({ children, ...props }) {
	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		comment: ''
	})

	const handleSubmit = e => {
		e.preventDefault()

		fetch('/mail/mail.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		})
			.then(response => response.json)
			.then(data => {
				if (data.success) {
					setSuccessMessage('Сообщение успешно отправлено!')
					setFormData({
						fullName: '',
						phone: '',
						email: '',
						comment: ''
					})
				} else {
					console.error('Произошла ошибка:', data.message)
				}
			})
			.catch(error => {
				console.error('Catch error: ', error)
			})
	}
	return (
		<main className={styles.main}>
			<CenterBlock>
				<WidthBlock>
					<div className={styles.contacts_wrapper}>
						<div className={styles.item}>
							<p
								className={styles.title}
								style={{ textTransform: 'uppercase' }}
							>
								Контакты
							</p>
							<ContactsBlock />
						</div>
						<div className={styles.work_schedule__wrapper}>
							<div className={styles.work_schedule}>
								<p className={styles.name}>РЕЖИМ РАБОТЫ</p>
								<p className={styles.date}>ПН­-ПТ</p>
								<p
									className={styles.time}
									style={{ color: 'var(--primaryColor)', fontWeight: '700' }}
								>
									10:00
								</p>
								<p
									className={styles.time}
									style={{ color: 'var(--primaryColor)', fontWeight: '700' }}
								>
									18:00
								</p>
								<p className={styles.date}>СБ-ВС</p>
								<p
									className={styles.weekend}
									style={{ color: 'var(--primaryColor)', fontWeight: '700' }}
								>
									Выходной
								</p>
							</div>
						</div>
						<div className={styles.item2}>
							<p
								className={styles.title2}
								style={{ textTransform: 'uppercase' }}
							>
								Есть вопросы? Напишите нам!
							</p>
							<form className={styles.form} action='' onSubmit={handleSubmit}>
								{/* <label htmlFor='fullName'>ФИО*</label> */}
								<input
									type='text'
									name='fullName'
									placeholder='ФИО*'
									required
								/>
								{/* <label htmlFor='phone'>Телефон*</label> */}
								<input type='tel' required placeholder='Телефон*' />
								{/* <label htmlFor='email'>E-mail*</label> */}
								<input type='email' required placeholder='E-mail*' />
								<textarea
									style={{ resize: 'none' }}
									name='comment'
									id='comment'
									placeholder='Комментарий'
									required
								></textarea>
								<label
									htmlFor='agree'
									style={{
										display: 'flex',
										flexDirection: 'row',
										gap: '15px'
										// fontSize: '16px'
									}}
								>
									<input
										className={styles.checkBox}
										type='checkbox'
										name=''
										id=''
										required
									/>
									Отправляя форму, я даю согласие на обработку персональных
									данных
								</label>
								<button type='submit' style={{ textTransform: 'uppercase' }}>
									Отправить
								</button>
							</form>
						</div>
					</div>
				</WidthBlock>
			</CenterBlock>
		</main>
	)
}

export default ContactsPage
