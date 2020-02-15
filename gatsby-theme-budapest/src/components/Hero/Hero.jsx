/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

const Hero = ({ title, description }) => {
  return (
    <section
      sx={{
        py: [4, 5],
        bg: 'lightBackground'
      }}>
      <div
        sx={{
          maxWidth: 640,
          mx: 'auto',
          px: 2,
          py: 2,
          textAlign: 'center'
        }}>
        <Styled.h1 dangerouslySetInnerHTML={{ __html: title }}></Styled.h1>
        <Styled.p dangerouslySetInnerHTML={{ __html: description }}></Styled.p>
      </div>
    </section>
  )
}

export default Hero
