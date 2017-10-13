import React from 'react'
import { render } from 'react-dom'
import catalogues, { page } from 'catalogues'

catalogues.config({ title: 'Catalogues Document' })

page('Hello, World 3')
.text(`
- Should Allow Mark down
`)
.section('Text')
.preview(() => <h1>1234</h1>)
.code(`
function fn() {
  console.log('test')
}
`)
.text(`
> Should Allow Mark down
`)
.preview(() => <h4>1234</h4>, `
function fn() {
  console.log('test')
}
`)

page('Hello, World 2')
.text(`
- Should Allow Mark down ~~
`)
.section('Text')
.preview(() => <h1>1234</h1>)
.code(`
function fn() {
  console.log('test')
}
`)
.text(`
> Should Allow Mark down

Hello
`)
.preview(() => <h4>1234</h4>, `
function fn() {
  console.log('test')
}
`)