/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import BlogList from '../components/BlogList'

const aboutPage = () => {
  return (
    <Layout>
      <Hero>Hero Component?</Hero>
      <section sx={{
        py: 4
      }}>
      <div
        sx={{
          variant: 'styles.container',
          textAlign: 'left'
        }}>
          <Styled.h1>This a H1 heading element</Styled.h1>
          <Styled.h2>This a H2 heading element</Styled.h2>
          <Styled.h3>This a H3 heading element</Styled.h3>
          <Styled.h4>This a H4 heading element</Styled.h4>
          <Styled.h5>This a H5 heading element</Styled.h5>
          <Styled.h6>This a H6 heading element</Styled.h6>
          <Styled.hr/>
          <Styled.p>Styled paragraph - Palo santo lumbersexual shaman tilde street art chia. Authentic YOLO leggings palo santo readymade adaptogen offal polaroid
            shabby chic mixtape messenger bag XOXO four loko woke.</Styled.p>
          <Styled.ul>
            <Styled.li>List item?</Styled.li>
            <li>Not Styled LI</li>
          </Styled.ul>
          <Styled.ol>
            <li>Regular list item</li>
            <li>Second ordered list item</li>
          </Styled.ol>
        </div>

      </section>
    </Layout>
  )
}


export default aboutPage
