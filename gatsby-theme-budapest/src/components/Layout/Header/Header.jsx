/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import Logo from './Logo'
import Switch from './Switch'

import sun from '../../../images/sun.png'
import moon from '../../../images/moon.png'

const Header = () => {
  const iconCss = [{ margin: 4 }]

  const checkedIcon = <img alt="moon indicating dark mode" src={moon} width="16" height="16" role="presentation" css={iconCss} />

  const uncheckedIcon = <img alt="sun indicating light mode" src={sun} width="16" height="16" role="presentation" css={iconCss} />

  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header
      sx={{
        width: '100%',
        px: 2,
        height: 80,
        py: 2,
        variant: 'styles.header',
        boxShadow: '0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)'
      }}>
      <div
        sx={{
          display: 'grid',
          gridGap: 3,
          width: ['100%', '90%'],
          mx: 'auto',
          gridAutoFlow: 'row',
          gridTemplateColumns: ['repeat(2, 1fr)', 'repeat(3, 1fr)'],
          variant: 'styles.header'
        }}>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gridColumnStart: [1, 2],
            gridColumnEnd: [3, 3],
            order: [0, 1]
          }}>
          <Logo />
        </div>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
          <Link
            to="/about-us"
            sx={{
              variant: 'styles.navlink',
              p: 2
            }}>
            About Us
          </Link>
          <Link
            to="/blog"
            sx={{
              variant: 'styles.navlink',
              p: 2
            }}>
            Blog
          </Link>
        </div>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            order: 2
          }}>
          <Switch
            aria-label="Toggle dark mode"
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
