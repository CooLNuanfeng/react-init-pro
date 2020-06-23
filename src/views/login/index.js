import React from 'react'

import { Button } from 'antd-mobile';

export default class Login extends React.Component {
  render(){
    return (
      <>
        <h1>Login Page</h1>
        <Button type="primary">login</Button>
      </>
    )
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
}