import React, { Component } from 'react'
import { Modal, Button } from 'antd'

import styles from './index.module.less'

import metamask from '../../assets/img/icon-sign/Metamask.png'
import Walletconnect from '../../assets/img/icon-sign/Walletconnect.png'
import binance from '../../assets/img/icon-sign/Binance.png'
import tokenPocket from '../../assets/img/icon-sign/TokenPocket.png'
import signBg from '../../assets/img/sign-bg.png'
import logoWhite from '../../assets/img/icon/logo2.png'

class LoginModal extends Component {
	constructor() {
		super()
		this.state = {
			isShow: false
		}
	}
	render() {
		const { isShow } = this.state

		const handleCancel = () => {
			this.setState({
				isShow: false
			})
		}

		const type = [
			{ label: 'Metamask', icon: metamask, key: 'Metamask' },
			{ label: 'Walletconnect', icon: Walletconnect, key: 'Walletconnect' },
			{ label: 'Binance chain wallet', icon: binance, key: 'BinanceChainWallet' },
			{ label: 'Token Pocket', icon: tokenPocket, key: 'TokenPocket' }
		]

		const modalBodyStyle = {
			display: 'flex',
			padding: '0',
			width: '600px',
			height: '400px',
			borderRadius: '8px'
		}

		const modalSideStyle = {
			backgroundImage: `url(${signBg})`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		}

		return (
			<Modal visible={isShow} footer={null} closable={false} onCancel={handleCancel} width={600} bodyStyle={modalBodyStyle} className={styles.loginModal}>
        <div className={styles.loginModalSide} style={modalSideStyle}>
          <img src={logoWhite} alt="" />
          <p>MUSE RATING</p>
        </div>
				<div className={styles.loginModalContainer}>
					<div className={styles.loginModalTitle}>Connect your wallet</div>
					<div className={styles.loginModalContent}>
						{
              type.map((item) => (
                <div key={item.key} className={styles.loginModalTypeItem}>
                  <Button shape='round'>
                    <img className={styles.loginModalTypeItemImg} src={item.icon} alt={item.icon} />
                    {item.label}
                  </Button>
                </div>
              ))
            }
					</div>
				</div>
			</Modal>
		)
	}
}

export default LoginModal
