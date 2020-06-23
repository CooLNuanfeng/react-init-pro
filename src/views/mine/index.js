import React from 'react'

import { Button } from 'antd-mobile';

export default class Mine extends React.Component {
  render(){
    return (
      <>
        <h1>Mine Page</h1>
        <Button type="primary">click</Button>
      </>
    )
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
}