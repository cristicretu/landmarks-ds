import { breakpoints, vars } from 'site/styles/theme.css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const card = style({
  minWidth: 'calc(100vw - 80px)',
  '@media': {
    [breakpoints.xx_laptop]: {
      minWidth: 'auto'
    }
  }
})

export const cardCarousel = style([
  sprinkles({
    padding: 'large',
    display: { mobile: 'flex', laptop: 'grid' }
  }),
  {
    gap: vars.spacing.large,
    overflow: 'auto',
    scrollbarWidth: 'none',
    selectors: {
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '@media': {
      [breakpoints.xx_laptop]: {
        // gridTemplateColumns: '3'
        // gridColumn: '3'
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      }
    }
  }
])
