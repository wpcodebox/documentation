import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <span>WPCodeBox 2 Documentation</span>,
    project: {
        link: 'https://github.com/wpcodebox/documentation'
    },
    docsRepositoryBase: 'https://github.com/wpcodebox/documentation/blob/main/',
    feedback: {content: 'Feedback'},
    editLink: {text: 'Edit This Page'},
    footer: {
        text: 'WPCodeBox Documentation',
    },
    head: (
        <>
            <meta property="og:title" content="WPCodeBox 2 Documentation"/>
            <meta property="og:description" content="WPCodeBox 2 Documentation"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg"/>

        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s – WPCodeBox Documentation',
        }
    }
}

export default config
