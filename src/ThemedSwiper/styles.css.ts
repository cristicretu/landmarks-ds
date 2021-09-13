import { style } from "@vanilla-extract/css"
import { vars, breakpoints } from "../../../styles/theme.css"

export const themedSwiper = style({
  vars: {
    '--swiper-theme-color': vars.color.brand,
    '--swiper-navigation-size': '30px',
  },
  '@media': {
    [breakpoints.xx_laptop]: {
      vars: {
        '--swiper-navigation-size': '40px',
      }
    }
  }
})