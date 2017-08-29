import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'

import makeStore from '../store'
import { testAction } from '../actions/test-actions'

class Page extends Component {
  
  static getInitialProps({store, pathname, query}) {
    store.dispatch(testAction('value from store'))
    return { custom: 'custom prop' }
  }

  render() {
  	return(
  	  <div>CUSTOM PROP {this.props.custom} {this.props.test.text}</div>
  	)
  }
}

const mapStateToProps = s => ({test: s.test})
const mapDispatchToProps = d => ({testAction: bindActionCreators(testAction, d)})

export default withRedux( makeStore, mapStateToProps, mapDispatchToProps )(Page)
