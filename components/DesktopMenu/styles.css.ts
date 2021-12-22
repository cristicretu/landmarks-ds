import { style } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'
import { breakpoints } from 'site/styles/theme.css'

export const hideOnMobile = style({
  display: 'none',

  '@media': {
    [breakpoints.xx_laptop]: {
      display: 'inherit',
    }
  }
})

export const noPadding = style({
  padding: 0,
})

export const stickyMenu = style([
  sprinkles({
    position: 'fixed',
    zIndex: 3,
  }),
  {
    top: 0,
    left: 0,
    right: 0,
  }
])

export const mainButton = style({
  display: 'none',

  '@media': {
    [breakpoints.xx_laptop]: {
      display: 'flex',
    }
  }
})