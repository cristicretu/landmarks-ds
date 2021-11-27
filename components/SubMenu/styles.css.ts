import { style } from '@vanilla-extract/css'
import { atoms } from 'site/styles/sprinkles.css'

export const container = style([
  atoms({
    position: { mobile: 'fixed', laptop: 'relative' },
    zIndex: 3,
  }),
  {
    touchAction: 'none',
    left: 0,
    right: 0,
  }
])

export const stretch = style({
  alignItems: 'center',
  height: '73px',
})

export const headerContainer = style([
  atoms({
    overflow: 'hidden',
  }),
  {
    flex: 1,
    touchAction: 'none',
  }
])

export const header = style({
  flex: 1,
})