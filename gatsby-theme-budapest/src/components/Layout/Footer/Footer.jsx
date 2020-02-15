/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer>
      <div
        sx={{
          color: 'background',
          bg: '#E9E9E9'
        }}>
        <div
          sx={{
            py: [3, 4],
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            variant: 'styles.container'
          }}>
          <Logo />
          <div>
            <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
              Home
            </Link>
            <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
              Blog
            </Link>
            <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
              About
            </Link>
          </div>
        </div>
      </div>
      <div sx={{ bg: 'lightBackground' }}>
        <div
          sx={{
            variant: 'styles.container',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
            fontSize: 0
          }}>
          <div>&copy; {new Date().getFullYear()} Gatsby Theme Budapest.</div>
          <div>
            Made with ❤️ + ☕ by{' '}
            <a href="https://www.crazycode.com" sx={{ color: 'text' }}>
              CrazyCode
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
