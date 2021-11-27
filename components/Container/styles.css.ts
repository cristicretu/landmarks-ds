import { style } from "@vanilla-extract/css"
import { breakpoints, overwrites } from "site/styles/theme.css"

export const container = style({
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media': {
    [breakpoints.xxx_desktop]: {
      maxWidth: `${overwrites.MAX_WIDTH || 1440}px`,
    }
  }
})

export const noGutter = style({
  padding: 0,
})