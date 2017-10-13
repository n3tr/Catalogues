import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { CodePreviewer, ElementPreviewer, TextPreviewer } from './ContentPreviewer'

const PageTitle = styled.h2`
  margin-top: 80px;
  font-size: 60px;
`

export default class Page extends React.Component {
  getContent(item, i) {
    switch (item.type) {
      case 'text':
        return <TextPreviewer key={i} text={item.value} />
      case 'element':
        return <ElementPreviewer key={i} element={item.value} code={item.code} />
      case 'code':
        return <CodePreviewer key={i} code={item.value} />
      case 'section':
        return <Section key={i} title={item.value} />
      default:
      return null
    }
  }

  render() {
    const { title, items }  = this.props.page
    return (
      <div>
        <PageTitle>{title}</PageTitle>
        {<div>
          { items.map( (item, i) => this.getContent(item, i) ) }
        </div>}
      </div>
    )
  }
}
