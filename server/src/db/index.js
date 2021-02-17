import redis from 'redis'
import { promisify } from 'util'

class DataAccessLayer {
	constructor() {
		this.client = redis.createClient(process.env.REDIS_URL)
		this.client.hsetAsync = promisify(this.client.hset).bind(this.client)
		this.client.setAsync = promisify(this.client.set).bind(this.client)
	}

	playerDetailsKey(gameId) {
		return `${gameId}_players`
	}

	votesKey(gameId) {
		return `${gameId}votes`
	}

	canShowKey(gameId) {
		return `${gameId}_can_show`
	}

	async addPlayer(gameId, playerName, sessionId) {
		await this.client.hsetAsync(this.playerDetailsKey(gameId), sessionId, playerName)
	}

	canShow(gameId, canShow) {
		this.client.setAsync(this.canShowKey(gameId), canShow)
	}
}

const DAL = new DataAccessLayer()
export { DAL }
