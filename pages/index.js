import React from 'react'
import withRedux from 'next-redux-wrapper'

import makeStore from '../store'
import { testAction } from '../actions/test-actions'

let Page = ({custom, test}) => (<div>CUSTOM PROP {custom} {test.text}</div>)

Page.getInitialProps = ({store, pathname, query}) => {        
  store.dispatch(testAction('value from store'))
  return { custom: 'custom prop' }
}

Page = withRedux(makeStore, state => ({test: state.test}))(Page)

export default Page
