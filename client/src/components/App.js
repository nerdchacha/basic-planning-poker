import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { hot } from 'react-hot-loader'

import Home from './Pages/Home'
import CreateGame from './Pages/CreateGame'
import NotFoundPage from './NotFoundPage'
import { Routes } from '../constants/index'

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path={Routes.Home} component={Home} />
					<Route path={Routes.CreateGame} component={CreateGame} />
					<Route path="/game/:gameId" />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		)
	}
}

export default hot(module)(App)
