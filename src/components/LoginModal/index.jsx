import React, { Component } from 'react'
import { Modal, Button } from 'antd'

import styles from './index.module.less'

import metamask from '../../assets/img/icon-sign/Metamask.png'
import Walletconnect from '../../assets/img/icon-sign/Walletconnect.png'
import binance from '../../assets/img/icon-sign/Binance.png'
import tokenPocket from '../../assets/img/icon-sign/TokenPocket.png'
import signBg from '../../assets/img/sign-bg.png'

class LoginModal extends Component {
	state = {
		isShow: true
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
      justifyContent: 'flex-end',
      padding: '0',
      width: '600px',
      height: '400px',
      borderRadius: '8px',
      backgroundImage: `url(${signBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    }

		return (
			<Modal visible={isShow} footer={null} closable={false} onCancel={handleCancel} width={600} bodyStyle={modalBodyStyle} className={styles.loginModal}>
        <div className={styles.loginModalContainer}>
          {
            type.map(item => (
              <div key={item.key} className={styles.ListItem}>
                <Button shape="round">
                  <img src={item.icon} alt={item.icon} />
                  {item.label}
                </Button>
              </div>
            ))
          }
        </div>
      </Modal>
		)
	}
}

export default LoginModal
