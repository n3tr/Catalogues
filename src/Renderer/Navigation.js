import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  padding: 0;
`

const LinkItem = styled(NavLink)`
  padding: 8px 24px 8px 24px;
  display: block;
  text-decoration: none;
  font-size: 18px;
  
  color: #627890;

  transition: all 0.2s ease;
  &:hover {
    background-color: #f8f8f8;
    color: #2F4259;
  }

  &.active {
    color: #2F4259;
  }

  
`

export default class Navigation extends React.Component {
  render() {
    const { pages } = this.props
    return (
      <div>
        <List>
          {pages.map((page, i) =>
            <ListItem key={i}>
              <LinkItem to={`/${page.slug}`} activeClassName="active">
                {page.title}
              </LinkItem>
            </ListItem>
          )}
        </List>
      </div>
    )
  }
}
