import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Button } from '@material-ui/core'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

import * as storage from '../../../localStorage'
import * as constants from '../../../constants'
import Dialog from '../../Dialog'
import ValidationForm from '../../ValidationForm'
import { Routes } from '../../../constants'

import './style.scss'

const HomePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const dispatch = useDispatch()
	useEffect(() => {
		const username = storage.get(constants.NAME_KEY)
		if (!username) {
			setIsModalOpen(true)
		}
	})

	const handleConfirm = () => {
		submitForm()
	}

	const validationSchema = Yup.object({
		name: Yup.string().min(3, 'Name must be 3 characters or more').max(100, 'Name can not be more than 100 characters').required('Name is required'),
	})
	const fields = [
		{
			component: 'TextField',
			name: 'name',
			type: 'text',
			fullWidth: true,
			icon: 'Person',
		},
	]

	let submitForm
	const bindSubmitForm = (submit) => {
		submitForm = submit
	}

	const handleSubmit = (values) => {
		storage.set(constants.NAME_KEY, values.name)
		setIsModalOpen(false)
	}

	const buttonStyle = {
		background: 'white',
		borderRadius: 3,
		height: '50px',
		fontSize: '18px',
		color: 'white',
		borderColor: 'white',
		color: '#008080',
	}

	const createGame = () => {
		dispatch(push(Routes.CreateGame))
	}

	return (
		<div className="home-page-container">
			<h3>Planning Poker</h3>
			<section>
				<h4>Some random text</h4>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ab esse exercitationem neque, doloremque odit veritatis sit. Cupiditate, sunt odit. Sint inventore itaque, veritatis doloremque optio eaque atque rerum id?</p>
				<Button variant="outlined" style={buttonStyle} fullWidth size="large" onClick={createGame}>
					Create Game
				</Button>
			</section>
			<Dialog isOpen={isModalOpen} title="Enter your name" size="sm" closeButton={false} handleConfirm={handleConfirm}>
				<ValidationForm validationSchema={validationSchema} fields={fields} bindSubmitForm={bindSubmitForm} handleSubmit={handleSubmit} />
			</Dialog>
		</div>
	)
}

export default HomePage
