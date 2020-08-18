import React from 'react'

import { Button } from 'antd-mobile';
import { connect } from 'react-redux';




class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 这部分代码很糟，而且还有 bug
    // const words = this.state.words;
    // words.push('marklar');
    this.setState({words: [...this.state.words,'marklar']});
  }

  render() {
    return (
      <div style={{'padding': '.2rem'}}>
        <button onClick={this.handleClick} >handleClick</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}




@connect(state => ({user: state.user}))
class Home extends React.PureComponent {
  render(){
    return (
      <>
        <h1>Home app</h1>
        <Button type="primary" size="small" onClick={()=>this.goPage()}>go Detail</Button>
        <WordAdder/>
      </>
    )
  }
  goPage(){
    console.log(this.props)
    this.props.history.push('/detail/12')
  }
}

export default Home