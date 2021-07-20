import React, { Component } from 'react'
import { Layout } from 'antd'

const { Header, Footer, Content } = Layout

class Index extends Component {
  state = {

  }
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}

export default Index