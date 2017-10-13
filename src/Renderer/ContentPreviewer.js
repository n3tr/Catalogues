import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Markdown from 'react-markdown'
import { atomOneDark } from 'react-syntax-highlighter/dist/styles'


const FlexCenterBox = styled.div`
  display: flex;
  border: 1px solid #f0f0f0;
  padding: 24px; 
`

export const CodePreviewer = ({ code }) => {
  return (
    <SyntaxHighlighter customStyle={{
      padding: '24px'
    }} language="javascript" style={atomOneDark}>
      {code.trim()}
    </SyntaxHighlighter>
  )
}

export const ElementPreviewer = ({ element, code }) => {
  const preview = typeof element === 'function' ? element() : element
  return (
    <div>
    <FlexCenterBox>
      <div>
        {preview}
      </div>
    </FlexCenterBox>
    { code ? 
        <SyntaxHighlighter customStyle={{
          padding: '24px',
          marginTop: 0
        }} language="javascript" style={atomOneDark}>
          {code.trim()}
        </SyntaxHighlighter> : null
      }
    </div>
  )
}

const TextBox = styled.div`
  font-size: 17px;
  color: #09192C;
  line-height: 1.6em;
  margin-bottom: 1.5em;
  margin-top: 1.5em;
`

export const TextPreviewer = ({ text }) => {
  return (
    <TextBox>
      <Markdown source={text.trim()} />
    </TextBox>
  )
}
