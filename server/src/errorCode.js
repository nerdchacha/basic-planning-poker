const messages = {
	400: 'There was a problem with your request',
}

const codes = {
	create: {
		prefix: 'GC',
		errors: [{ name: 'requestValidation', code: '001' }],
	},
}

Object.keys(codes).forEach((key) => {
	codes[key].errors.forEach((error) => {
		codes[key][error.name] = (code) => ({
			code: `${codes[key].prefix}${error.code}`,
			message: messages[code],
		})
	})
})

export { codes }
