import { style, styleVariants } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'

export const container = style({
  opacity: 0,
  transition: 'all 0.8s',
})

export const variantsStart = styleVariants({
  slideUp: {
    transform: 'translateY(50px)',
  }
})

export const variantsEnd = styleVariants({
  slideUp: {
    transform: 'translateY(0px)',
    opacity: 1,
  }
})

export const backgroundImage = sprinkles({
  zIndex: -1,
  userSelect: 'none',
})