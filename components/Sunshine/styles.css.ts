import { style } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'

export const absoluteFill = style([
  sprinkles({
    position: 'absolute',
  }),
  {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }
])