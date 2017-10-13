import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import { CodePreviewer, ElementPreviewer, TextPreviewer, Section } from './ContentPreviewer'

const PageView = styled.ScrollView`
  background: #fff;
  
`

export default class Page extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.page.title}`,
  })

  getContent(item, i) {
    switch (item.type) {
      case 'text':
        return <TextPreviewer key={i} text={item.value} />
      case 'element':
        return <ElementPreviewer key={i} element={item.value}  code={item.code} />
      case 'code':
        return <CodePreviewer key={i} code={item.value} />
      case 'section':
        return <Section key={i} title={item.value} />
      default:
      return null
    }
  }

  render() {
    const { params } = this.props.navigation.state
    const { title, items } = params.page
    console.log(items)
    return (
      <PageView>
        {items.map((item, i) => this.getContent(item, i))}
      </PageView>
    )
  }
}
