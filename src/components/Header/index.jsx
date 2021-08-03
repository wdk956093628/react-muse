import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Avatar, Popover, Button, Divider } from 'antd'
const { Header } = Layout

import { CopyOutlined } from '@ant-design/icons'

import styles from './index.module.less'

import logo from '../../assets/img/icon/logo.png'
import avatar from '../../assets/img/icon/avatar.png'

import LoginModal from '../LoginModal'

const personModal = () => {
	return (
		<div className={styles.personModal}>
			<div className={styles.personModalName}>
				<span>0x5455555...fhs1</span>
				<Button type="text" shape="circle" icon={<CopyOutlined style={{color: '#0EBC79'}} />} />
			</div>
			<div className={styles.personModalBalance}>
				<Avatar size={44} src={avatar} alt='avatar' />
				<div className={styles.personModalBalance_container}>
					<div className={styles.personModalBalance_label}>Balance</div>
					<div className={styles.personModalBalance_content}>
						<span>7894.23 MRC</span>
						<span>$18.14</span>
					</div>
				</div>
			</div>
			<Divider />
			<div className={styles.personModalDisconnect}>
				<Button shape="round" block style={{ height: '40px', color: '#FF6A51', borderColor: '#FF6A51' }}>Disconnect</Button>
			</div>
		</div>
	)
}

class HeaderIndex extends Component {
	state = {
		currentMenu: 'home',
		ifLogin: true
	}

	onClickHandle = () => {
		// eslint-disable-next-line no-console
		console.log('1111111111111')
	
	}
	render() {
		const { currentMenu, ifLogin } = this.state
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
					{
						ifLogin ?
						<Popover content={personModal} placement='bottomRight' trigger='click'>
							<div className={styles.person}>
								<span>Connect your wallet</span>
								<Avatar size={36} src={avatar} alt='avatar' />
							</div>
						</Popover> :
						<div onClick={() => { this.onClickHandle() }}>
							<div className={styles.person}>
								<span>Connect your wallet</span>
								<Avatar size={36} src={avatar} alt='avatar' />
							</div>
						</div>
					}
				</div>
				<LoginModal />
			</Header>
		)
	}
}

export default HeaderIndex
