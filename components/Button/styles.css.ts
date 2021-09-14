import { style, styleVariants } from "@vanilla-extract/css"
import { breakpoints, vars } from "../../../styles/theme.css"
import { atoms } from "../../../system/styles/sprinkles.css"

export const button = style([
  atoms({
    alignItems: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
  }),
  {
    display: 'inline-flex',
    fontFamily: vars.font.body,
    textDecoration: 'none',
  }
])

export const variants = styleVariants({
  text: {
    color: vars.color.white,
  },
  regular: {
    color: vars.color.white,
    backgroundColor: vars.color.secondary,
  },
  outlineWhite: {
    border: '3px solid white',
    backgroundColor: 'rgba(255,255,255, .3)',
    color: vars.color.white,
  },
  underline: {
    textAlign: 'left',
    borderBottom: `2px solid ${vars.color.white}`,
  },
})

export const sizes = styleVariants({
  small: {
    fontSize: '10px',
    padding: '3px 6px',
    '@media': {
      [breakpoints.xx_laptop]: {
        fontSize: '12px',
        padding: '4px 8px',
      }
    }
  },

  medium: {
    fontSize: '14px',
    padding: '5px 10px',
    '@media': {
      [breakpoints.xx_laptop]: {
        fontSize: '14px',
        padding: '8px 15px',
      }
    }
  },

  large: {
    fontSize: '14px',
    padding: '10px 20px',
    '@media': {
      [breakpoints.xx_laptop]: {
        fontSize: '16px',
        padding: '13px 30px',
      }
    }
  }
})

export const endIcon = style({
  selectors: {
    [`${variants.underline} &`]: {
      marginLeft: '20px',
    }
  }
})