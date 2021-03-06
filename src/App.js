import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import Index from './pages/Index/index'
class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Index} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
