import * as FormikFields from 'formik-material-ui'

const customComponents = {
	Select: Select,
}

export const field = (options) => {
	const { component } = options
	const fieldComponent = customComponents[component] || FormikFields[component] || FormikFields.TextField
}
