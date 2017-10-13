import React from 'react'
import styled from 'styled-components/native'
import { CodePreviewer, ElementPreviewer, TextPreviewer } from './ContentPreviewer'

const View = styled.View``

const SectionBox = styled.View`
  margin-top: 24px
`

const SectionTitle = styled.Text`
  padding: 0px 8px 12px;
  font-size: 24px;
  font-weight: normal;
`

export default class Section extends React.Component {
  render() {
    const { title, items } = this.props

    return (
      <SectionBox>
        <SectionTitle>{ title }</SectionTitle>
      </SectionBox>
    )
  }
}
