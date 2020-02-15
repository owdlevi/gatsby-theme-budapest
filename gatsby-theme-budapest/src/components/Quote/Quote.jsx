/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

const Quote = () => {
  return (
    <section
      sx={{
        backgroundColor: 'background',
        py: [3, 4]
      }}>
      <div
        sx={{
          maxWidth: ['100%', '700px', '1200px'],
          mx: 'auto',
          px: [3, 4, 5],
          color: 'text',
          textAlign: 'center',
          fontSize: [16, 24, 32],
          fontStyle: 'italic',
          fontWeight: 500
        }}>
        Budapest is an Alpha − global city with strengths in commerce, finance, media, art, fashion, research, technology, education, and
        entertainment.
      </div>
    </section>
  )
}

export default Quote
