import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>WPCodeBox 2 Documentation</span>,
  feedback:  { content: null},
  editLink: { text: null},
  footer: {
    text: 'WPCodeBox Documentation',
  },
  head: (
      <>
        <meta property="og:title" content="WPCodeBox 2 Documentation" />
        <meta property="og:description" content="WPCodeBox 2 Documentation" />
      </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – WPCodeBox Documentation',
    }
  }
}

export default config
