import { style } from "@vanilla-extract/css"
import { sprinkles } from "site/styles/sprinkles.css"
import { breakpoints, overwrites, vars } from "site/styles/theme.css"


export const menuContainer = style({
  paddingTop: overwrites.MENU_HEIGHT,

  '@media': {
    [breakpoints.xx_laptop]: {
      display: 'none'
    }
  }
})

export const menu = style({
  left: 0,
  right: 0,
  bottom: 0,
  height: `${overwrites.MENU_HEIGHT}px`,
  zIndex: 4,
})

export const toggle = style({
  display: 'flex',
  position: 'absolute',
  left: '10px',
  top: 0,
})

export const content = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 3,
})

export const item = style([
  sprinkles({
    display: 'block',
    fontSize: '2x',
    padding: 'large',
    color: 'white',
  }),
  {
    textDecoration: 'none',
  }
])

export const icon = style({
  fontSize: '20px',
})

export const bgImage = style({
  right: 0,
  bottom: '20%',
})

// like a default theme that is meant to be overwritten
export const defaultMenu = style([
  sprinkles({
    color: 'white',
  })
])

export const defaultMainButton = style([
  sprinkles({
    background: 'secondary',
    color: 'white',
  })
])

export const defaultMainButtonActive = style([
  sprinkles({
    opacity: '0.7',
  })
])

export const defaultOtherButtons = style([
  sprinkles({
    background: 'tertiary',
    color: 'white',
  })
])

export const defaultContent = style([
  sprinkles({
    background: 'tertiary',
    color: 'white',
  })
])

export const bottomChrome = style([
  sprinkles({
    position: 'fixed',
    background: 'chrome',
  }),
  {
    left: 0,
    right: 0,
    bottom: '-200px',
    height: '200px',
  }
])