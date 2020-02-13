/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Tag = ({ tag }) => {
  return (
    <Link
      sx={{
        p: 1,
        mx: 1,
        fontSize: '14px',
        color: 'primary',
        borderRadius: '10px'
      }}
      to={`/tag/${tag.toLowerCase()}`}>
      #{tag}
    </Link>
  )
}

export default Tag