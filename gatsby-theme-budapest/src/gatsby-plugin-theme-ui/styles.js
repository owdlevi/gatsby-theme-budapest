export default {
  root: {
    fontFamily: `body`
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700
  },
  h1: {
    variant: 'text.heading',
    fontSize: 5,
    fontWeight: `fontWeights.heading`
  },
  container: {
    fontSize: 1,
    width: '100%',
    maxWidth: ['100%', '1400px'],
    px: 2,
    mx: 'auto'
  },
  navlink: {
    color: 'text',
    fontWeight: `500`
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 2,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3
  },
  code: {
    fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: `inherit`
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`
  },
  // from typography overrideThemeStyles
  a: {
    color: `primary`
  },
  hr: {
    borderColor: `muted`
  },
  p: {
    code: {
      fontSize: `inherit`
    }
  },
  li: {
    code: {
      fontSize: `inherit`
    }
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: 0.8,
    '&.translation': {
      fontSize: `1em`
    }
  }
}
