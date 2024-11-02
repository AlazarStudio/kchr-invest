import React from 'react'
import {
	Create,
	Datagrid,
	Edit,
	FunctionField,
	List,
	SimpleForm
} from 'react-admin'

import RichTextInput from '../Auth/RichTextInput'

const stripHTML = html => {
	const tmp = document.createElement('DIV')
	tmp.innerHTML = html
	return tmp.textContent || tmp.innerText || ''
}

// Валидация для ограничения количества изображений
const validateImageCount = value => {
	if (value && value.length > 3) {
		return 'Можно загрузить не более 3 изображений'
	}
	return undefined
}

export const InfoList = props => (
	<List {...props}>
		<Datagrid>
			<FunctionField
				label='Текст'
				render={record => stripHTML(record.text)}
				style={{
					display: '-webkit-box',
					WebkitLineClamp: 4,
					WebkitBoxOrient: 'vertical',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					whiteSpace: 'normal'
				}}
			/>
		</Datagrid>
	</List>
)

export const InfoEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<RichTextInput source='text' label='Текст' />
		</SimpleForm>
	</Edit>
)

export const InfoCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<RichTextInput source='text' label='Текст' />
		</SimpleForm>
	</Create>
)
