import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  margin: 5px 0 0 5px;
`
const Title = styled.div`
 background-color: grey;
 padding: 5px;
 font-weight: bold;
`
const Body = styled.div`
  background-color: lightgrey;
  padding: 5px;
  text-align: center;
`

const PostRow = ({order, title, body}) => (
  <Wrapper>
    <Title>
      {`${order}. ${title}`}
    </Title>
    <Body>
      {body}
    </Body>
  </Wrapper>
)

PostRow.propTypes = {
  order: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default PostRow