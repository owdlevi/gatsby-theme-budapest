import 'typeface-nunito'
import 'typeface-open-sans'
import { toTheme } from '@theme-ui/typography'

const typography = {
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Open Sans', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Nunito', 'serif']
  // See below for the full list of options.
}

export default toTheme(typography)
