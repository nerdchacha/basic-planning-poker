import { deepFreeze } from './utils'

const Game = {
	System: {
		Febonacci: 0,
		ModifiedFebonacci: 1,
		TshirtSize: 2,
		PowerOfTwo: 3,
	},
	Show: {
		Creator: 0,
		Everyone: 1,
	},
}
deepFreeze(Game)

export { Game }
