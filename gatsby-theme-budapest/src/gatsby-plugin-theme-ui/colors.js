const purple60 = `#663399`
const purple30 = `#D9BAE8`
const white = `#fff`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const lightGray = `hsla(0, 0%, 0%, 0.2)`

export default {
  text: '#212121',
  background: '#ffffff',
  lightBackground: '#C8E6C9',
  primary: '#4CAF50',
  darkPrimary: '#388E3C',
  secondary: '#388E3C',
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: '#121212',
  prism: {
    background: `#212121`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`
  },
  modes: {
    dark: {
      text: '#FFFFFF',
      background: '#121212',
      lightBackground: '#388E3C',
      primary: purple30,
      secondary: lightWhite,
      muted: opaqueLightWhite,
      highlight: purple60,
      heading: white
    }
  }
}
