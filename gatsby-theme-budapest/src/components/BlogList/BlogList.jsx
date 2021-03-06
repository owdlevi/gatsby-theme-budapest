/** @jsx jsx */
import { Styled, jsx } from 'theme-ui'

import BlogCard from '../BlogCard'

const BlogList = ({ title, description, posts }) => {
  return (
    <section
      sx={{
        py: [3, 4],
        backgroundColor: 'lightBackground'
      }}>
      <div
        sx={{
          variant: 'styles.container'
        }}>
        <div
          sx={{
            maxWidth: 640,
            mx: 'auto',
            px: 2,
            pb: [2, 3],
            textAlign: 'center'
          }}>
          <Styled.h2
            sx={{
              variant: 'heading',
              textAlign: 'center',
              mb: [2, 3]
            }}
            dangerouslySetInnerHTML={{ __html: title }}></Styled.h2>
          <Styled.p dangerouslySetInnerHTML={{ __html: description }}></Styled.p>
        </div>
        <div
          sx={{
            listStyle: 'none',
            m: 0,
            display: 'flex',
            justifyContent: 'space-around',
            flexFlow: ['column', 'row wrap'],
            flexWrap: 'wrap'
          }}>
          {posts.map(post => (
            <BlogCard key={post.node.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
