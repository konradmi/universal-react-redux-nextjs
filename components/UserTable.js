import React, {Component} from 'react'
import styled from 'styled-components'

import UserRow from './UserRow'

const Table = styled.div`
  margin: auto;
  max-width: 960px;
  min-width: 400px;
  border: 2px solid black;
`

const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  background: gray;
`

const TableColumnTitle = styled.div`
  width: ${props => (
      {
        phone: '50%;',
        tablet: '33.3%;',
        desktop: '25%;'
      }[props.browser.mediaType]
    )
  }
`

export default class UserTable extends Component {
  
  renderHeader = (p = this.props) => (
    <TableHeader>
      <TableColumnTitle browser={p.browser}>
        Name
      </TableColumnTitle>
      {
        p.browser.greaterThan.phone && (
          <TableColumnTitle browser={p.browser}>
            Username
          </TableColumnTitle>
        )
      }
      {
        p.browser.greaterThan.tablet && (
          <TableColumnTitle browser={p.browser}>
            Email
          </TableColumnTitle>
        )
      }
      <TableColumnTitle browser={p.browser}>
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
        browser={p.browser}
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