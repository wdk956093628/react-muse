import React, { Component } from 'react'
import { Layout, Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

import styles from './index.module.less'

import logo from '../../assets/img/icon/logo.png'
import avatar from '../../assets/img/icon/avatar.png'

class HeaderIndex extends Component {
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
			<Header className={styles.header}>
				<div className={styles.headerWrapper}>
					<div className={styles.logo}>
						<Link to="/" className={styles.logoLink}>
							<img src={logo} alt='logo' />
							<span>NFT MUSE</span>
						</Link>
					</div>
					<Menu mode='horizontal' defaultSelectedKeys={[currentMenu]} className={styles.menu}>
						{
							menu.map((item) => {
								return <Menu.Item key={item.key}>{item.label}</Menu.Item>
							})
						}
					</Menu>
					<div className={styles.person}>
						<span>Connect your wallet</span>
						<Avatar size={36} src={avatar} alt='avatar' />
					</div>
				</div>
			</Header>
		)
	}
}

export default HeaderIndex
