import { style } from '@vanilla-extract/css'
import { vars } from 'site/styles/theme.css'

export const item = style({
  borderBottom: '1px solid rgba(255, 255, 255, .2)',
  textDecoration: 'none',

  selectors: {
    '&:last-child': {
      border: 'none',
    }
  }
})

export const selectedItem = style({
  color: vars.color.white,
})