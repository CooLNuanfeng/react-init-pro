import React from 'react'

import { Button } from 'antd-mobile';
import { connect } from 'react-redux';

import {doLogin} from '../../actions/loginReg'

@connect(null, {doLogin}  )
class Login extends React.Component {
  render(){
    return (
      <>
        <h1>Login Page</h1>
        <Button type="primary" onClick={()=>this.login()}>login</Button>
      </>
    )
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  login(){
    this.props.doLogin().then((res)=>{
      this.props.history.push('/mine')
    })
  }
}

export default Login;