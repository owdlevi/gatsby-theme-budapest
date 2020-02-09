/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer
      sx={{
        fontSize: 0,
        color: 'textyar',
        bg: '#eceff1',
        variant: 'styles.footer'
      }}>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          width: ['100%', '90%'],
          mx: 'auto',
          px: 2,
          py: 4
        }}>
        <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
          Home
        </Link>
        <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
          Blog
        </Link>
        <Link to="/" sx={{ variant: 'styles.navlink', p: 2 }}>
          About
        </Link>
        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>&copy; {new Date().getFullYear()} Gatsby Theme Budapest.</div>
      </div>
    </footer>
  )
}

export default Footer