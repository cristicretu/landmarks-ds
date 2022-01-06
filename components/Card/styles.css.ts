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
        boxShadow: vars.shadows.small
      },
      medium: {
        boxShadow: vars.shadows.medium
      },
      large: {
        boxShadow: vars.shadows.large
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
