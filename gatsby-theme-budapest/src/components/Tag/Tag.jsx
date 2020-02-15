/** @jsx jsx */
import { jsx } from 'theme-ui'

const Tag = ({ tag }) => {
  return (
    <span
      sx={{
        p: 1,
        mx: 1,
        fontSize: '14px',
        color: 'text',
        borderRadius: '10px'
      }}>
      #{tag}
    </span>
  )
}

export default Tag
