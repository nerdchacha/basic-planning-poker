import express from 'express'
import shortId from 'shortid'
import Joi from 'joi'
import { values } from 'lodash'

import { Game } from '../constant'
import { codes } from '../errorCode'
import { DAL } from '../db'

const router = express.Router()

router.post('/create', (req, res) => {
	const schema = Joi.object({
		name: Joi.string().alphanum().min(3).max(100).required(),
		player: Joi.string().alphanum().min(3).max(100).required(),
		system: Joi.number()
			.valid(...values(Game.System))
			.required(),
		show: Joi.number()
			.valid(...values(Game.Show))
			.required(),
	})

	const validation = schema.validate(req.body)
	if (validation.error) {
		res.status(400).json(codes.create.requestValidation(400))
	}

	const gameId = shortId.generate()
	const sessionId = '1'
	const { player: playerName, show: canShow } = req.body
	DAL.addPlayer(gameId, playerName, sessionId)
	DAL.canShow(gameId, canShow)
	res.sendStatus(201)
})

export default router
