import React from 'react'
import {
	Create,
	Datagrid,
	Edit,
	List,
	SimpleForm,
	TextField,
	TextInput
} from 'react-admin'

export const InvestDocGroupsList = props => (
	<List {...props}>
		<Datagrid>
			<TextField source='title' label='Название группы'/>
		</Datagrid>
	</List>
)

export const InvestDocGroupsEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source='title' label='Название группы' />
		</SimpleForm>
	</Edit>
)

export const InvestDocGroupsCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source='title' label='Название группы' />
		</SimpleForm>
	</Create>
)
