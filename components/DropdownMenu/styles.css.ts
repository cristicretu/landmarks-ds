import { style } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'
import { vars } from 'site/styles/theme.css'

export const arrow = style({
  fill: 'white'
})

export const menuContent = style([
  sprinkles({
    background: 'white',
    paddingY: 'large',
    borderRadius: 'small',
    boxShadow: 'large',
  }),
])

export const menuItem = style([
  sprinkles({
    display: 'block',
    color: 'onLight',
    cursor: 'pointer',
    paddingX: 'large',
    fontSize: '-1x'
  }),
  {
    // TODO: where should we put this textDecoration? Some sites might want it
    textDecoration: 'none',
    selectors: {
      '&:hover': {
        outline: 'none',
        color: vars.color.primary,
      }
    }
  }
])