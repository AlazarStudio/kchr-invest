import React from 'react'
import {
	Create,
	Datagrid,
	Edit,
	ImageField,
	ImageInput,
	List,
	SimpleForm,
	TextField,
	TextInput
} from 'react-admin'

import uploadsConfig from '../../../../uploadsConfig'
import { handleSave, handleSaveWithImages } from '../JS/fileUploadUtils'

export const SMList = props => (
	<List {...props}>
		<Datagrid>
			<TextField source='id' label='№' />
			<TextField
				source='title'
				label='Заголовок'
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

export const SMEdit = props => (
	<Edit {...props} transform={handleSaveWithImages}>
		<SimpleForm>
			<TextInput disabled source='id' label='№' />
			<TextInput source='title' label='Заголовок' />

			<ImageInput
				source='imagesRaw'
				label='Добавить новые изображения'
				multiple
			>
				<ImageField source='src' title='title' />
			</ImageInput>

			{/* Поле для редактирования старых и добавления новых изображений */}
			<ImageInput
				source='images'
				label='Изображения'
				multiple
				accept='image/*'
				format={value =>
					value && value.length
						? value.map(image => ({
								src: image.includes('http')
									? image
									: `${uploadsConfig}${image}`,
								title: image
							}))
						: []
				}
				parse={value =>
					value.map(file => {
						// Если это новый файл (имеет rawImage), вернем только его имя
						if (file.rawImage) {
							return file.rawImage
						}
						// Если это старое изображение (имеет только src), извлекаем имя файла
						return file.src.replace(`${uploadsConfig}`, '')
					})
				}
			>
				<ImageField source='src' title='title' />
			</ImageInput>
		</SimpleForm>
	</Edit>
)

export const SMCreate = props => (
	<Create {...props} transform={handleSave}>
		<SimpleForm>
			<TextInput source='title' label='Заголовок' />
			<ImageInput source='images' label='Изображения' multiple>
				<ImageField source='src' title='title' />
			</ImageInput>
		</SimpleForm>
	</Create>
)
