import { sprinkles } from '@styles/sprinkles.css'
import { breakpoints, vars } from '@styles/theme.css'
import { style } from '@vanilla-extract/css'

export const dialog = style([
  sprinkles({
    position: 'relative',
    background: 'white',
    boxShadow: 'large'
  }),
  {
    // bottom: `${overwrites.MENU_HEIGHT}px`,
    width: '100vw',
    height: `100vh`,
    overflow: 'auto',

    '@media': {
      [breakpoints.xx_laptop]: {
        bottom: 'auto',
        width: 'min(100vw - 3rem, 1440px)',
        height: 'calc(100vh - 3rem)',
        borderRadius: vars.border.radius.large
      }
    }
  }
])

export const closeBtn = style([
  sprinkles({
    position: { mobile: 'fixed', laptop: 'absolute' },
    cursor: 'pointer',
    color: 'primary'
  }),
  {
    right: vars.spacing.large,
    top: vars.spacing.large
  }
])

export const overlay = style([
  sprinkles({
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background: 'black_alpha_06'
  }),
  {
    display: 'grid',
    overflowY: 'auto',
    placeItems: 'center'
  }
])
