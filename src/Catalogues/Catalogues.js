import React from 'react'
import CataloguesRenderer from '../Renderer/CataloguesRenderer'

class Page {
  constructor(title, description, slug) {
    this.title = title
    this.description = description
    this.slug = slug
    this.items = []
  }

  section = (title) => {
    this.items.push({ type: 'section', value: title })
    return this
  }

  text = (text) => {
    this.items.push({ type: 'text', value: text })
    return this
  }

  preview = (element, code) => {
    this.items.push({ type: 'element', value: element, code })
    return this
  }

  code = (code) => {
    this.items.push({ type: 'code', value: code })
    return this
  }

  _clear = () => {
    while(this.items.length > 0) {
      this.items.pop();
    }
  }
}

class Catalogues {
  
  constructor() {
    this.pages = []
    this.pageSlug = {}
  }

  page = (title, description) => {
    const slug = this.createSlug(title)
    const page = new Page(title, description, slug)

    const existingPage = this.pageSlug[slug]
    if (existingPage) {
      // Support HMR
      console.log('existingPage', existingPage)
      existingPage._clear()
      return existingPage
    } else {
      this.pageSlug[slug] = page
      this.pages.push(page)
    }
    
    return page
  }

  getPage = (slug) => {
    return this.pageSlug[slug]
  }

  Renderer = () => {
    return <CataloguesRenderer explorer={this} />
  }

  createSlug = (title) => {
    return title.toLowerCase().replace(' ','-')
  }
}

export default Catalogues