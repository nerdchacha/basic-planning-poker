import React from 'react'
import { Formik, Form, Field } from 'formik'
import classnames from 'classnames'
import { Box, InputAdornment } from '@material-ui/core'
import * as FormikFields from 'formik-material-ui'
import * as Icons from '@material-ui/icons'

const ValidationForm = (props) => {
	const { initialValues, fields, validationSchema, handleSubmit, bindSubmitForm } = props

	const renderField = ({ component, type, label, name, className, icon, ...rest }) => {
		const MaterialIcon = icon ? Icons[icon] : null
		const inputProps = icon
			? {
					startAdornment: (
						<InputAdornment position="start">
							<MaterialIcon />
						</InputAdornment>
					),
			  }
			: ''
		const formikComponent = FormikFields[component] || FormikFields.TextField
		const options
		return (
			<Box className={classnames('form-element', className)} key={name}>
				<Field component={formikComponent} type={type} label={label} name={name} margin="normal" InputProps={inputProps} {...rest} />
			</Box>
		)
	}

	fields.forEach((field) => Object.assign(initialValues, { [field.name]: '' }, initialValues))

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
			{({ submitForm }) => {
				bindSubmitForm(submitForm)
				return <Form>{fields.map(renderField)}</Form>
			}}
		</Formik>
	)
}

ValidationForm.defaultProps = {
	initialValues: {},
	bindSubmitForm: () => null,
}

export default ValidationForm
