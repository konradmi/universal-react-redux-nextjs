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
  	return(
      <UserTable users={this.props.users}/>
  	)
  }
}

const mapStateToProps = s => ({users: s.users})

export default withRedux( makeStore, mapStateToProps )(Users)
