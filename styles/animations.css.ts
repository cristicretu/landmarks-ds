import { style, keyframes } from "@vanilla-extract/css"

export const delay1s = style({
  selectors: {
    '&:after': {
      animationDelay: '1s'
    }
  }
})

export const delay2s = style({
  selectors: {
    '&:after': {
      animationDelay: '2s'
    }
  }
})