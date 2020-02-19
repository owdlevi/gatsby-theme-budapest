/** @jsx jsx */
import { useState } from 'react'
import { Styled, jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

import Tag from '../Tag/Tag'

const BlogCard = ({ post }) => {
  const [iscardVisisble, setCardVisible] = useState(false)
  const [isCardActive, setCardActive] = useState(false)

  const cardIn = useSpring({
    config: { duration: 500 },
    transform: iscardVisisble ? `scale(1) translateY(0)` : `scale(0.9) translateY(100px)`
  })

  const cardActive = useSpring({
    transform: isCardActive ? `scale(1.05)` : `scale(1)`
  })

  return (
    <animated.div
      key={post.node.fields.slug}
      style={cardIn}
      sx={{
        mb: 4,
        width: ['100%', '100%', 'calc(100%/2 - 30px)', 'calc(100%/3 - 40px)'],
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',

        borderRadius: 5,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background'
      }}>
      <Waypoint key={post.node.fields.slug} bottomOffset="50px" onEnter={() => setCardVisible(true)} />
      <animated.div style={cardActive}
        onMouseEnter={() => setCardActive(true)}
        onMouseLeave={() => setCardActive(false)}
        sx={{
          position: 'relative', textAlign: 'center',
          height: ['auto', '600px'],
        }}
      >
        <Link to={post.node.fields.slug}>
          <div
            sx={{
              height: '60%',
              position: 'relative'
            }}>
            <Img
              sx={{
                height: '100%'
              }}
              fluid={post.node.frontmatter.featuredImage.childImageSharp.fluid}
              alt={post.node.frontmatter.title}
            />
            <div
              sx={{
                position: 'absolute',
                zIndex: 20,
                left: 0,
                bottom: 0,
                backgroundColor: 'darkPrimary'
              }}>
              <span
                to="/"
                sx={{
                  display: 'inline-block',
                  p: [2],
                  color: 'background',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  letterSpacing: '1px'
                }}>
                {post.node.frontmatter.category}
              </span>
            </div>
            <div
              sx={{
                position: 'absolute',
                zIndex: 20,
                right: 0,
                bottom: 0,
                backgroundColor: 'darkPrimary'
              }}>
              <span
                sx={{
                  display: 'inline-block',
                  p: [2],
                  color: 'background',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  letterSpacing: '1px'
                }}>
                {post.node.timeToRead} min
            </span>
            </div>
          </div>
          <div
            sx={{
              p: [2, 3]
            }}>
            <Styled.h2
              sx={{
                m: 0,
                color: 'text',
                textDecoration: 'none',
                mb: [1, 2],
                fontWeight: 600
              }}>
              {post.node.frontmatter.title}
            </Styled.h2>
            <Styled.p
              sx={{
                color: 'text',
                textDecoration: 'none',
                lineHeight: '1.4em'
              }}>
              {post.node.frontmatter.excerpt}
            </Styled.p>
            <div
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                // height: '40px',
                p: [1, 2],
                backgroundColor: 'background',
                color: 'text'
              }}>
              {post.node.frontmatter.tags.map(tag => {
                return <Tag key={`${post.node.id}_${tag}`} tag={tag} />
              })}
            </div>
          </div>
        </Link>
      </animated.div>
    </animated.div>
  )
}

export default BlogCard
