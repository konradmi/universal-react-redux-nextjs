import React, {Component} from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background: green;
`

export default class PostRow extends Component {
  render() {
  	return (
      <Div className='posts__row'>
        {this.props.title}
      </Div>
  	)
  }
}