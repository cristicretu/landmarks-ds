import { style } from "@vanilla-extract/css"
import { breakpoints } from "site/styles/theme.css"

export const container = style({
  minHeight: '60vh',

  '@media': {
    [breakpoints.xx_laptop]: {
      minHeight: '400px'
    }
  }
})