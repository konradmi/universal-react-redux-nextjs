import React from 'react'

const Page = ({custom}) => (<div>Custom prop {custom}</div>)

Page.getInitialProps = ({pathname, query}) => ({        
  custom: 'custom proooop'
})

export default Page

