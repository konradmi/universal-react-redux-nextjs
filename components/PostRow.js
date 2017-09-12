import React, {Component} from 'react'
import styled from 'styled-components'

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

export default class PostRow extends Component {
  render() {
  	return (
      <Wrapper>
        <Title>
          {`${this.props.order}. ${this.props.title}`}
        </Title>
        <Body>
          {this.props.body}
        </Body>
      </Wrapper>
  	)
  }
}