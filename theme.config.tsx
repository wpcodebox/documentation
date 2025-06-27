import React from 'react'
import {DocsThemeConfig} from 'nextra-theme-docs'
import Script from "next/script";


const config: DocsThemeConfig = {
    logo: <div style={{display: "flex", alignItems: "center", fontWeight: 600}}><img src={'/favicon.svg'} style={{width: 38, marginRight: 10}} />WPCodeBox 2 Documentation</div>,
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

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V63156T8EJ"></Script>
            <Script id="google-analytics" >
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push( arguments ); }
                gtag( 'js', new Date() );

                gtag( 'config', 'G-V63156T8EJ' );
                `}
            </Script>
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s – WPCodeBox Documentation',
        }
    }
}

export default config
