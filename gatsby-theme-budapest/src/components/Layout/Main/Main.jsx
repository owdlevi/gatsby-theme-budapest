/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Main = ({ children }) => {
  return (
    <main
      sx={{
        mx: 'auto',
        variant: 'styles.main'
      }}>
      {children}
    </main>
  )
}

export default Main
