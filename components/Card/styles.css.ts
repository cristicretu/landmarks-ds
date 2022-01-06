import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { fontFace, style } from '@vanilla-extract/css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { vars } from 'site/styles/theme.css'

export const cardRecipe = recipe({
  base: [
    sprinkles({
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }),
    style({
      boxSizing: 'border-box',
      color: vars.color.white,
      backgroundColor: vars.color.primary,
      whiteSpace: 'nowrap',
      userSelect: 'none',
      outline: 'none',
      transition: 'all 0.2s ease-in-out',
      fontFamily: vars.font.body,
      textDecoration: 'none'
    })
  ],
  variants: {
    elevation: {
      none: {
        boxShadow: 'none'
      },
      // gradients generated from:
      // https://shadows.brumm.af
      small: {
        boxShadow:
          '0px 0px 0.1px rgba(0, 0, 0, 0.039),   0px 0px 0.3px rgba(0, 0, 0, 0.049),   0px 0px 0.5px rgba(0, 0, 0, 0.054),   0px 0px 0.9px rgba(0, 0, 0, 0.059),   0px 0px 1.7px rgba(0, 0, 0, 0.068),   0px 0px 4px rgba(0, 0, 0, 0.1)'
      },
      medium: {
        boxShadow:
          '0px 0.4px 0.3px rgba(0, 0, 0, 0.039),   0px 0.8px 0.7px rgba(0, 0, 0, 0.049),   0px 1.3px 1.3px rgba(0, 0, 0, 0.054),   0px 2.2px 2.2px rgba(0, 0, 0, 0.059),   0px 3.7px 4.2px rgba(0, 0, 0, 0.068),   0px 8px 10px rgba(0, 0, 0, 0.1)'
      },
      large: {
        boxShadow:
          '0px 1.3px 0.8px rgba(0, 0, 0, 0.039),   0px 2.9px 2px rgba(0, 0, 0, 0.049),   0px 5px 3.8px rgba(0, 0, 0, 0.054),   0px 8.1px 6.7px rgba(0, 0, 0, 0.059),   0px 13.8px 12.5px rgba(0, 0, 0, 0.068),   0px 30px 30px rgba(0, 0, 0, 0.1)'
      }
    },
    radius: {
      small: sprinkles({
        borderRadius: 'small'
      }),
      medium: sprinkles({
        borderRadius: 'medium'
      }),
      large: sprinkles({
        borderRadius: 'large'
      })
    }
  },
  defaultVariants: {
    elevation: 'small',
    radius: 'small'
  }
})

export type TCardRecipe = RecipeVariants<typeof cardRecipe>
