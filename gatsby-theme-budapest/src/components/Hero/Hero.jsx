/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

const Hero = () => {
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
        <Styled.h1>
          This theme was built for <strong>Gatsby</strong> with <strong>Theme UI</strong>
        </Styled.h1>
        <Styled.p>
          Lorem ipsum dolor amet asymmetrical master cleanse disrupt YOLO portland, schlitz photo booth enamel pin locavore vegan hoodie
          skateboard you probably haven't heard of them.{' '}
        </Styled.p>
      </div>
    </section>
  )
}

export default Hero
