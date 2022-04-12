import { sprinkles } from '@styles/sprinkles.css'
import { breakpoints, vars } from '@styles/theme.css'
import { style } from '@vanilla-extract/css'

export const carousell = style({})

export const slide = style({
  position: 'relative',
  flex: '0 0 100%'
})

export const emblaButton = style([
  sprinkles({
    position: 'absolute',
    cursor: 'pointer'
  }),
  {
    outline: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    background: vars.color.white_alpha_02,
    ':hover': {
      background: vars.color.white_alpha_08
    }
  }
])

export const overlay = style([
  sprinkles({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background: 'black_alpha_04'
  })
])

export const leftButton = style({
  left: 0,
  '@media': {
    [breakpoints.xx_laptop]: {
      left: vars.spacing.large
    }
  }
})

export const rightButton = style({
  right: 0,
  '@media': {
    [breakpoints.xx_laptop]: {
      right: vars.spacing.large
    }
  }
})
