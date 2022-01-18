import { breakpoints, vars } from 'site/styles/theme.css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const card = style({
  minWidth: 'calc(100vw - 120px)',
  '@media': {
    [breakpoints.xx_laptop]: {
      minWidth: 'auto'
    }
  }
})

export const cardCarousel = style([
  sprinkles({
    padding: 'large',
    display: { mobile: 'flex', laptop: 'grid' },
    userSelect: 'none',
  }),
  {
    gap: vars.spacing.xlarge,
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
        gap: vars.spacing.xxlarge,
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
      }
    }
  }
])
