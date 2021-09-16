import { style } from "@vanilla-extract/css"
import { breakpoints, overwrites } from "site/styles/theme.css"


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