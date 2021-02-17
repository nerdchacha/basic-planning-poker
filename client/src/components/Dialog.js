import React from 'react'
import { Button, Dialog as MDialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import PropTypes from 'prop-types'

const Dialog = (props) => {
	const { isOpen, title, size, children, closeButton, confirmButton, closeText, confirmText, handleClose, handleConfirm } = props
	const renderTitle = title ? <DialogTitle>{title}</DialogTitle> : ''
	const renderCloseButton = closeButton ? (
		<Button onClick={handleClose} color="primary">
			{closeText}
		</Button>
	) : (
		''
	)
	const renderConfirmButton = confirmButton ? (
		<Button onClick={handleConfirm} color="primary">
			{confirmText}
		</Button>
	) : (
		''
	)
	return (
		<MDialog fullWidth maxWidth={size} open={isOpen}>
			{renderTitle}
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				{renderCloseButton}
				{renderConfirmButton}
			</DialogActions>
		</MDialog>
	)
}

Dialog.defaultProps = {
	size: 'sm',
	closeText: 'Cancel',
	confirmText: 'Confirm',
	closeButton: true,
	confirmButton: true,
	handleClose: () => null,
	handleConfirm: () => null,
}

export default Dialog
