import React from 'react'
import { Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import catalogues from '../Catalogues'

const ItemContainer = styled.View`
  padding: 12px;
  background: #fff;
`

const PageTitle = styled.Text`
  font-size: 18px;
`

const PageDesc = styled.Text`
  font-size: 12px;
  color: #666;
`

const PageListItem = ({ page, onSelect }) => {

  return (
    <TouchableHighlight key={page.title} onPress={() => {
      onSelect(page)
      }}>
      <ItemContainer>
        <PageTitle>{ page.title }</PageTitle>
        <PageDesc>{ page.description ? page.description : 'No description' } </PageDesc>
      </ItemContainer>
    </TouchableHighlight>
  )
}

export default class PageList extends React.Component {
  static navigationOptions = {
    title: 'Catalogues'
  };

  render() {
    const { pages } = catalogues
    const { navigation } = this.props

    console.log(pages)

    return (
      <FlatList
        data={pages.map(page => Object.assign({}, page, { key: page.slug }))}
        renderItem={({ item }) => {
          return <PageListItem 
          key={item.title}
          page={item} 
          onSelect={(page) => {
            navigation.navigate('Page', { page: page })
          }} />
        }}
      />
    );
  }
}
