import React, {Component} from 'react'
// import { connect } from 'react-redux'
// import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from '../Header'
import Tabbar from '../Tabbar'
import Login from '../../views/login'
 
import store from '../../store'

import './layout.scss'


const Layout = (WrappedComponent, pageInfo) => {
  return class extends Component {
    render() {
      console.log(store.getState())
      if(pageInfo.needLogin && !store.getState().user.token){
        return (
          <div className="page-warp">
            {pageInfo.showHeader ? <Header/> : null}
            <div className="page-body" style={{top: pageInfo.showHeader ? '.9rem' : 0, bottom: pageInfo.showTabbar ? '.9rem' : 0}}>
              <Login {...this.props}/>
            </div>
            {pageInfo.showTabbar ? <Tabbar />: null}
          </div>
        )
      }else{
        return (
          <div className="page-warp">
            {pageInfo.showHeader ? <Header/> : null}
            <div className="page-body" style={{top: pageInfo.showHeader ? '.9rem' : 0, bottom: pageInfo.showTabbar ? '.9rem' : 0}}>
              <WrappedComponent {...this.props}/>
            </div>
            {pageInfo.showTabbar ? <Tabbar />: null}
          </div>
        )
      }
      
    }
  }
}

export default Layout