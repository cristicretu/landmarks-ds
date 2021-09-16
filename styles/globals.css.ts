import { style } from '@vanilla-extract/css'
import { breakpoints, overwrites } from 'site/styles/theme.css'

export const expanded = style({
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
})

export const fullScreenHeight = style({
  height: `calc(100vh - ${overwrites.MENU_HEIGHT}px)`,

  '@media': {
    [breakpoints.xx_laptop]: {
      height: '100vh'
    }
  }
})