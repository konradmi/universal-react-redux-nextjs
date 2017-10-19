import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

const UserTable = ({browser, users}) => {
  
  const renderHeader = () => (
    <TableHeader>
      <TableColumnTitle browser={browser}>
        Name
      </TableColumnTitle>
      {
        browser.greaterThan.phone && (
          <TableColumnTitle browser={browser}>
            Username
          </TableColumnTitle>
        )
      }
      {
        browser.greaterThan.tablet && (
          <TableColumnTitle browser={browser}>
            Email
          </TableColumnTitle>
        )
      }
      <TableColumnTitle browser={browser}>
        Actions
      </TableColumnTitle>
    </TableHeader>
  )

  const renderRows = () => (
    users.map((user, i) => (
      <UserRow
        name={user.name}
        username={user.username}
        email={user.email}
        id={user.id}
        browser={browser}
        key={i}
      />
    ))
  )

	return (
    <Table>
      {renderHeader()}
      {renderRows()}
    </Table>
	)
}

UserTable.propTypes = {
  browser: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
}

export default UserTable
