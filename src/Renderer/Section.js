import React from 'react'
import styled from 'styled-components'

const SectionBox = styled.div`

`

const SectionTitle = styled.h3`
  border-top: 1px solid #ececec;
  margin-top: 44px;
  padding-top: 40px;
  line-height: 1.2;
  font-size: 36px;
`

export default class Section extends React.Component {
  render() {
    const { title } = this.props

    return (
      <SectionBox>
        <SectionTitle>{ title }</SectionTitle>
      </SectionBox>
    )
  }
}
