/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const RealtedPost = ({ prev, next }) => {
  return (
    <>
      <div
        sx={{
          display: 'grid',
          gridColumnGap: '24px',
          gridTemplateRows: 'auto',
          gridTemplateAreas: 'previous next',
          gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr) )',
          mx: 'auto',
          my: [2, 3, 4]
        }}>
        {prev ? (
          <div
            sx={{
              textAlign: 'left'
            }}>
            <Link
              sx={{
                color: '#242A31',
                border: '1px solid #E6ECF1',
                px: [2],
                mb: [3, 3],
                display: 'flex',
                position: 'relative',
                gridArea: 'previous',
                alignSelf: 'stretch',
                boxShadow: '0 3px 8px 0 rgba(116, 129, 141, 0.1)',
                transition: 'border 250ms ease',
                alignItems: 'center',
                justifySelf: 'stretch',
                borderRadius: '3px',
                flexDirection: 'row',
                textDecoration: 'none',
                backgroundColor: '#FFFFFF',
                pageBreakInside: 'avoid',
                variant: 'styles.link'
              }}
              to={prev.fields.slug}>
              <div
                sx={{
                  flex: '0 0 auto',
                  color: 'text',
                  margin: '0',
                  display: 'block',
                  padding: '16px',
                  fontSize: '24px'
                }}>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="currentColor"
                  class="icon-7f6730be--text-3f89f380">
                  <g>
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </g>
                </svg>
              </div>
              <div
                sx={{
                  flex: '1',
                  margin: '0',
                  display: 'block',
                  padding: '16px',
                  textAlign: 'right'
                }}>
                {' '}
                <div>
                  <span sx={{ fontSize: '12px', fontWeight: 400 }}>Previous</span>
                </div>
                <div>
                  {' '}
                  <span sx={{ fontWeight: 600 }}>{prev.frontmatter.title}</span>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
        {next ? (
          <div
            sx={{
              textAlign: 'right'
            }}>
            <Link
              sx={{
                color: '#242A31',
                border: '1px solid #E6ECF1',
                mb: [3, 3],
                display: 'flex',
                px: [2],
                position: 'relative',
                gridArea: 'next',
                alignSelf: 'stretch',
                boxShadow: '0 3px 8px 0 rgba(116, 129, 141, 0.1)',
                transition: 'border 250ms ease',
                alignItems: 'center',
                justifySelf: 'stretch',
                borderRadius: '3px',
                flexDirection: 'row',
                textDecoration: 'none',
                backgroundColor: '#FFFFFF',
                pageBreakInside: 'avoid',
                variant: 'styles.link'
              }}
              to={next.fields.slug}>
              <div
                sx={{
                  flex: '1',
                  margin: '0',
                  display: 'block',
                  padding: '16px',
                  textAlign: 'left'
                }}>
                {' '}
                <div>
                  <span sx={{ fontSize: '12px', fontWeight: 400 }}>Next</span>
                </div>
                <div>
                  {' '}
                  <span sx={{ fontWeight: 600 }}>{next.frontmatter.title}</span>
                </div>
              </div>
              <div
                sx={{
                  flex: '0 0 auto',
                  color: 'text',
                  margin: '0',
                  display: 'block',
                  padding: '16px',
                  fontSize: '24px'
                }}>
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="currentColor"
                  class="icon-7f6730be--text-3f89f380">
                  <g>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}

export default RealtedPost
