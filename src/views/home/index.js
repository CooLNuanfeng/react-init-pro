import React from 'react'

import { Button } from 'antd-mobile';
import { connect } from 'react-redux';

@connect(state => ({user: state.user}))
class Home extends React.PureComponent {
  render(){
    console.log(this.props.user, 'home')
    return (
      <>
        <h1>Home app</h1>
        <Button type="primary" size="small" onClick={()=>this.goPage()}>go Detail</Button>
      </>
    )
  }
  goPage(){
    console.log(this.props)
    this.props.history.push('/detail')
  }
}

export default Home