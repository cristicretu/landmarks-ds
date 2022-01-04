import { style } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'

export const arrow = style({
  fill: 'white'
})

export const content = style([
  sprinkles({
    paddingX: 'medium',
    paddingY: 'small',
    color: 'neutral_5',
    fontSize: '-1x',
    background: 'white',
    borderRadius: 'small',
  }),
  {
    boxShadow:
      'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  }
])
