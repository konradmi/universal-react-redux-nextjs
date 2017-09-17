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
  width: 25%;
`

export default class UserRow extends Component {
  render() {
  	return (
      <UserWrapper>
        <Column>
          {this.props.name}
        </Column>
        <Column>
          {this.props.username}
        </Column>
        {this.props.browser.mediaType === 'desktop' && (
            <Column>
              {this.props.email}
            </Column>
          )
        }
        <Column>
          <Link href={`/Posts?id=${this.props.id}`} as={`/posts/${this.props.id}`} prefetch>
            Show posts
          </Link>
        </Column>
      </UserWrapper>
  	)
  }
}