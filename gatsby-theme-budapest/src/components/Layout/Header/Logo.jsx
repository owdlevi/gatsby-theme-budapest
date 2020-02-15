/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import logo from '../../../images/logo.svg'
import logo_dark from '../../../images/logo_dark.svg'

const Logo = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Link to="/" title="Home">
      <img
        sx={{
          height: 50
        }}
        alt="Gatsby Theme Budapest"
        src={isDark ? logo_dark : logo}
      />
      <span
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          top: -9999
        }}>
        Home
      </span>
    </Link>
  )
}

export default Logo
