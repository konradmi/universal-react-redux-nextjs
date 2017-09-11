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

const PostsButton = styled.div``

export default class UserRow extends Component {

  onShowPosts = id => () => Router.push(`/Posts/${id}`)

  render() {
  	return (
      <UserWrapper>
        <Column>
          {this.props.name}
        </Column>
        <Column>
          {this.props.username}
        </Column>
        <Column>
          {this.props.email}
        </Column>
        <Column>
          <Link href={`/Posts?id=${this.props.id}`} as={`/posts/${this.props.id}`} prefetch>
            Show comments
          </Link>
        </Column>
      </UserWrapper>
  	)
  }
}