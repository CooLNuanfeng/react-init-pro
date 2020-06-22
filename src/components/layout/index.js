import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
    
 
const Layout = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
  
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  
}

export default Layout;