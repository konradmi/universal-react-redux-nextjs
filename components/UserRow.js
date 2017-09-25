import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  padding: 4px;
  
  &:nth-child(2n+1) {
    background: lightgray;
  }
`

const Column = styled.div`
  width: ${props => (
      {
        phone: '50%;',
        tablet: '33.3%;',
        desktop: '25%;'
      }[props.browser.mediaType]
    )
  }
`

export default class UserRow extends Component {
  render() {
    const { browser, id, name, username, email } = this.props
  	
    return (
      <UserWrapper>
        <Column browser={browser}>
          {this.props.name}
        </Column>
        {
          browser.greaterThan.phone && (
            <Column browser={browser}>
              {username}
            </Column>
          )
        }
        {
          browser.greaterThan.tablet && (
            <Column browser={browser}>
              {email}
            </Column>
          )
        }
        <Column browser={browser}>
          <Link href={`/Posts?id=${id}`} as={`/posts/${id}`} prefetch>
            Show posts
          </Link>
        </Column>
      </UserWrapper>
  	)
  }
}