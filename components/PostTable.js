import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

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

const PostTable = ({browser, title, posts}) => {

  const renderTitle = () => (
    <TitleWrapper browser={browser}>
      <BackLink browser={browser}>
        <Link href='/Users' prefetch>
          Back to Users
        </Link>
      </BackLink>
      <div>
        {title}
      </div>
    </TitleWrapper>
  )

  const renderPosts = () => (
    posts.map((post, i) => (
      <PostRow
        title={post.title}
        body={post.body}
        key={i}
        order={i + 1}
      />
    ))
  )

  return (
    <Wrapper browser={browser}>
      {renderTitle()}
      {renderPosts()}
    </Wrapper>
  )
}

PostTable.propTypes = {
  browser: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default PostTable
