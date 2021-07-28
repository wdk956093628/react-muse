import React, { Component } from 'react'
import { Layout } from 'antd'

import styles from './index.module.less'

import Header from '../../components/Header'

class Index extends Component {
	state = {}
	render() {
		return (
			<Layout className={styles.wrap}>
				<Header />
			</Layout>
		)
	}
}

export default Index
