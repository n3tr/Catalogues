import React from 'react'
import styled from 'styled-components'
import './style.css'

import { HashRouter, Route } from 'react-router-dom'
import Page from './Page'
import Navigation from './Navigation'

const Root = styled.div`
  position: relative;
  font-family: 'Helvetica neue', Arial, sans-serif;
`

const NavigationWrapper = styled.div`
  align-content: stretch;
  width: 300px;
  text-align: left;
  position: relative;
  border-left: 1px solid #f0f0f0;
  margin-left: 60px;
`

const NavigationInner = styled.div`
  position: fixed;
  z-index: 2;
  height: calc(100vh - 60px);
  overflow-y: auto;
  width: 200px;
  margin-right: -999px;
  padding-right: 999px;
  background-color: #fafafa;
  opacity: 1 !important;
  padding-top: 80px;
`

const PageWrapperInner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const createRouterContainer = explorer => {
  class PageRouterContainer extends React.Component {
    getPage = () => {
      const { match } = this.props

      return explorer.getPage(match.params.slug)
    }

    render() {
      const page = this.getPage()
      if (!page) {
        return <div>Not found!</div>
      }
      return <Page page={this.getPage()} />
    }
  }
  return PageRouterContainer
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  background: #333535;
  color: #fff;
  z-index: 2;
`

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  height: 60px;
`

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 90%;
`

const PageTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: lighter;
`

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Container>
          <HeaderInner>
            <PageTitle>{this.props.title}</PageTitle>
          </HeaderInner>
        </Container>
      </HeaderContainer>
    )
  }
}

const PageWrapper = styled.div`
  background: #ffffff;
  margin-top: 60px;
  display: flex;
`

const PageInner = styled.div`
  flex: 1;
  display: flex;
`

const Content = styled.div`
  min-height: calc(100vh - 60px);
  padding-bottom: 80px;
  flex: 1;
`

class CataloguesRenderer extends React.Component {
  constructor(props) {
    super(props)
    this.explorer = props.explorer
    console.log(this.explorer)
    this.routerContainer = createRouterContainer(this.explorer)
  }
  render() {
    return (
      <HashRouter>
        <Root>
          <Header title={this.explorer.title}/>

          <Container>
            <PageWrapper>
              <PageInner>
                <Content>
                  <Route exact path="/:slug" component={this.routerContainer} />
                </Content>

                <NavigationWrapper>
                  <NavigationInner>
                    <Navigation pages={this.explorer.pages} />
                  </NavigationInner>
                </NavigationWrapper>
              </PageInner>
            </PageWrapper>
          </Container>
        </Root>
      </HashRouter>
    )
  }
}

export default CataloguesRenderer
