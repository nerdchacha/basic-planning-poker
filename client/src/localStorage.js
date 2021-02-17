const set = (key, data) => {
	if (!key || !data) {
		return
	}
	const value = JSON.stringify(data)
	localStorage.setItem(key, value)
}

const get = (key) => {
	if (!key) {
		return null
	}
	const value = localStorage.getItem(key)
	if (!value) {
		return null
	}
	return JSON.parse(value)
}

export { get, set }
