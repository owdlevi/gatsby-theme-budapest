/** @jsx jsx */
import { jsx } from 'theme-ui'
import Logo from '../Logo'
import SocialButtons from './SocialButtons'

const Footer = () => {
  return (
    <footer>
      <div
        sx={{
          color: 'background',
          bg: 'footerBackground'
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
            <SocialButtons />
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
            Made with{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>{' '}
            +{' '}
            <span role="img" aria-label="coffe">
              ☕
            </span>{' '}
            by{' '}
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
