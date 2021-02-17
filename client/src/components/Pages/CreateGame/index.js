import React from 'react'
import { Container } from '@material-ui/core'
import * as Yup from 'yup'

import ValidationForm from '../../ValidationForm'

const CreateGame = () => {
	const fields = [
		{
			component: 'TextField',
			name: 'gameName',
			type: 'text',
			label: 'Game name',
			fullWidth: true,
		},
		{
			component: 'Select',
			name: 'votingSystem',
			type: 'text',
		},
	]

	const validationSchema = Yup.object({
		gameName: Yup.string().min(3, 'Game name must 3 characters or more').max(100, 'Game name can not be more than 100 characters').required('Game name is required'),
	})

	return (
		<div className="create-game-container">
			<Container>
				<h4>Choose a name and a voting system for your game</h4>
				<ValidationForm fields={fields} validationSchema={validationSchema} />
			</Container>
		</div>
	)
}

export default CreateGame
