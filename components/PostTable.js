import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import PostRow from './PostRow'

const Wrapper = styled.div`
  margin: auto;
  max-width: 960px;
  min-width: 400px;
  border: 2px solid black;
  padding: 5px;
`

const TitleWrapper = styled.div`
  font-weight: bold;
  font-size: ${props => (
      {
        phone: '20px;',
        tablet: '25px;',
        desktop: '45px;'
      }[props.browser.mediaType]
    )
  }
  text-align: center;
  padding: 5px;
`

const BackLink = styled.div`
  float: ${props => (
      {
        phone: 'none;',
        tablet: 'left;',
        desktop: 'left;'
      }[props.browser.mediaType]
    )
  }
`

export default class PostTable extends Component {

  renderTitle = (p = this.props) => (
    <TitleWrapper browser={p.browser}>
      <BackLink browser={p.browser}>
        <Link href='/Users' prefetch>
          Back to Users
        </Link>
      </BackLink>
      <div>
        {p.title}
      </div>
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
      <Wrapper browser={this.props.browser}>
        {this.renderTitle()}
        {this.renderPosts()}
      </Wrapper>
  	)
  }
}