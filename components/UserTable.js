import React, {Component} from 'react'
import styled from 'styled-components'

import UserRow from './UserRow'

const Table = styled.div`
  max-width: 960px;
  border: 2px solid black;
`

const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  background: gray;
`

const TableColumnTitle = styled.div`
  width: 25%;
`

export default class UserTable extends Component {
  
  renderHeader = () => (
    <TableHeader>
      <TableColumnTitle>
        Name
      </TableColumnTitle>
      <TableColumnTitle>
        Username
      </TableColumnTitle>
      <TableColumnTitle>
        Email
      </TableColumnTitle>
      <TableColumnTitle>
        Actions
      </TableColumnTitle>
    </TableHeader>
  )

  renderRows = (p = this.props) => (
    p.users.map((user, i) => (
      <UserRow
        name={user.name}
        username={user.username}
        email={user.email}
        id={user.id}
        key={i}
      />
    ))
  )

  render() {
  	return (
      <Table>
        {this.renderHeader()}
        {this.renderRows()}
      </Table>
  	)
  }
}