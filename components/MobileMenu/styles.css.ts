import { style, globalStyle } from "@vanilla-extract/css"
import { breakpoints, vars } from "../../../styles/theme.css"

export const MENU_SIZE = 96

export const menuContainer = style({
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
  height: `${MENU_SIZE}px`,
  zIndex: 4,
})