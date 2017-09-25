import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'

import makeStore from '../store'
import { fetchUsers } from '../actions/users-actions'
import UserTable from '../components/UserTable'

class Users extends Component {
  
  static async getInitialProps({store, pathname, query}) {
    await store.dispatch(fetchUsers())
  }

  render() {
  	const {users, browser} = this.props
  	return(
      <UserTable users={users} browser={browser}/>
  	)
  }
}

const mapStateToProps = s => ({users: s.users, browser: s.browser})

export default withRedux( makeStore, mapStateToProps )(Users)
