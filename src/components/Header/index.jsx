import React, { Component } from 'react'
import { Layout, Menu } from 'antd'

const { Header } = Layout

// import styles from './index.less'

class Index extends Component {
	state = {
		currentMenu: 'home'
	}
	render() {
		const { currentMenu } = this.state
		const menu = [
			{ label: 'Home', key: 'home' },
			{ label: 'Date', key: 'date' },
			{ label: 'Rank', key: 'rank' },
			{ label: 'Museum', key: 'museum' },
			{ label: 'MRC', key: 'mrc' },
			{ label: 'Contact', key: 'contact' }
		]
		return (
			<Header>
				<Menu mode='horizontal' selectedKeys={[currentMenu]}>
					{
            menu.map((item) => {
              return <Menu.Item key={item.key}>{item.label}</Menu.Item>
            })
          }
				</Menu>
			</Header>
		)
	}
}

export default Index
