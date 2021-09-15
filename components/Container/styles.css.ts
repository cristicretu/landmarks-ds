import { style } from "@vanilla-extract/css"
import { breakpoints } from "site/styles/theme.css"
import { atoms } from 'site/styles/sprinkles.css'

export const container =
  style([
    atoms({
      padding: 'large',
      position: 'relative',
    }),
    {
      margin: 'auto',

      '@media': {
        [breakpoints.xxx_desktop]: {
          maxWidth: '1440px',
        }
      }
    }
  ])

export const noGutter = style({
  padding: 0,
})