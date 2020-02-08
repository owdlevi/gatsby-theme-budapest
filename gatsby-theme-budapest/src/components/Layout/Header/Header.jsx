/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Header = () => {
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
          <Link to="/" title="Home">
            <img alt="UI Logo" src="https://contrast.now.sh/cff/40f?width=200&height=48&text=Budapest" />
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
        </div>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
          <Link
            to="/work"
            sx={{
              variant: 'styles.navlink',
              p: 2
            }}>
            Work
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
          <Link
            to="/about"
            sx={{
              variant: 'styles.navlink',
              p: 2
            }}>
            About
          </Link>
          <Link
            to="/contact"
            sx={{
              variant: 'styles.navlink',
              p: 2
            }}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
