import React from 'react'
import catalogues from '../Catalogues'
import NativeCataloguesRenderer from './NativeCataloguesRenderer'

function getNativeRenderer() {
  return <NativeCataloguesRenderer catalogues={catalogues} />
}

catalogues.Renderer = getNativeRenderer

module.exports = catalogues