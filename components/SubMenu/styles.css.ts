import { style } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'

export const container = style([
  sprinkles({
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
  sprinkles({
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

// Default classes
export const title = style([
  sprinkles({
    background: 'primary',
    color: 'white',
  })
])

export const list = style([
  sprinkles({
    background: 'secondary',
    paddingY: 'large',
  })
])