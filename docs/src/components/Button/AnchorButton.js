import React from 'react'

export const AnchorButton = props => (
  <a
    css={{
      overflow: 'hidden',
      display: 'inline-block',
      position: 'relative',
      padding: '12px 20px 12px',
      border: '2px solid transparent',
      borderRadius: '4px',
      fontWeight: '700',
      userSelect: 'none',
      textAlign: 'center',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'background 200ms ease, transform 200ms ease',
      ':hover': {
        transform: 'translateY(-2px)',
        background: 'rgba(0, 0, 0, 0.1)',
      },
      ':visited': {
        color: 'inherit',
      },
    }}
    {...props}
  />
)