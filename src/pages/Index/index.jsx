import React, { Component } from 'react'
import { Layout } from 'antd'

import Header from '../../components/Header'

class Index extends Component {
  state = {

  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Header />
      </Layout>
    )
  }
}

export default Index