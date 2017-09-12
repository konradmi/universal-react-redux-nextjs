import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import PostRow from './PostRow'

const Wrapper = styled.div`
  margin: auto;
  max-width: 960px;
  border: 2px solid black;
  padding: 5px;
`

const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding: 5px;
`

const Text = styled.div``

const BackLink = styled.div`
  float: left;
`

export default class PostTable extends Component {

  renderTitle = (p = this.props) => (
    <TitleWrapper>
      <BackLink>
        <Link href='/Users' prefetch>
          Back to Users
        </Link>
      </BackLink>
      <Text>
        {p.title}
      </Text>
    </TitleWrapper>
  )

  renderPosts = (p = this.props) => (
    p.posts.map((post, i) => (
      <PostRow
        title={post.title}
        body={post.body}
        key={i}
        order={i + 1}
      />
    ))
  )

  render() {
  	return (
      <Wrapper>
        {this.renderTitle()}
        {this.renderPosts()}
      </Wrapper>
  	)
  }
}