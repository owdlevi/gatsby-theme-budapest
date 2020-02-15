import React from 'react'
import { Global, css } from '@emotion/core'

const ResetCSS = () => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 15px;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          html,
          html a,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          a,
          p,
          li,
          dl,
          th,
          dt,
          input,
          textarea,
          span,
          div {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-top: 0;
            font-weight: normal;
          }

          body {
            margin: 0;
            padding: 0;
            font-size: 15px;
            overflow-x: hidden;
            -webkit-tap-highlight-color: transparent;
          }

          p {
            line-height: 2;
            margin: 0 0 1.7em 0;
          }

          input,
          textarea,
          select,
          button {
          }

          ul,
          ol {
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
            box-shadow: none;
          }

          a:hover {
            text-decoration: none;
          }

          blockquote {
            font-weight: 500;
          }

          pre[class*='language-'] {
            padding: 1.5em;
            margin: 2em 0;
            overflow: auto;
          }

          table {
            display: block;
            overflow: auto;
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 2.7em;
            line-height: 1.6;
          }

          table tr {
            background-color: #fff;
            border-top: 1px solid #c6cbd1;
          }

          table th {
            font-weight: 500;
          }

          table td,
          table th {
            border: 1px solid #dfe2e5;
            padding: 0.4em 1em;
          }
        `}
      />
    </>
  )
}
export default ResetCSS
