import React from 'react'
import styled from 'styled-components/native'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/styles'

export const CodePreviewer = ({ code }) => {
  return (
    <SyntaxHighlighter customStyle={{
      padding: 12,
      marginBottom: 24
    }} language="javascript" style={atomOneDark}>
      {code}
    </SyntaxHighlighter>
  )
}

const View = styled.View``

const FlexCenterBox = styled.View`
  position: relative;
  display: flex;
  border: 1px solid #f0f0f0;
  padding: 32px 0;
  justify-content: center;
  align-items: center;
`

const PreviewLabel = styled.Text`
  position: absolute;
  font-size: 10px;
  color: #999;
  top: -1;
  left: -1;
  border: 1px solid #f0f0f0;
  padding: 2px;
`

export const ElementPreviewer = ({ element, code }) => {

  const preview = typeof element === 'function' ? element() : element
  return (
    <View>
    <FlexCenterBox>
      <PreviewLabel>
        PREVIEW
      </PreviewLabel>
      <View>
        {preview}
      </View>
    </FlexCenterBox>
    { code ? 
        <SyntaxHighlighter customStyle={{
          padding: 12,
          marginTop: 0
        }} language="javascript" style={atomOneDark}>
          {code.trim()}
        </SyntaxHighlighter> : null
      }
    </View>
  )
}

const Text = styled.Text`
  font-size: 14px;
  color: #09192C;
  line-height: 22px;
  margin-bottom: 14px;
  padding: 0 8px;
`

export const TextPreviewer = ({ text }) => {
  return (
    <Text>
      {text}
    </Text>
  )
}
