import React from 'react'

import { Button } from 'antd-mobile';

export default class Detail extends React.Component {
  render(){
    console.log(this.props)
    return (
      <>
        <h1>Detail app</h1>
        <Button type="primary">click</Button>
      </>
    )
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
}