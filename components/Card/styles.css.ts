import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { fontFace, style } from '@vanilla-extract/css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { vars } from 'site/styles/theme.css'

export const mediaTitle = style({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  paddingLeft: vars.spacing.medium,
  paddingBottom: vars.spacing.medium,
  background: `linear-gradient(0deg, rgba(0,0,0, 0.7) 0%, rgba(0,0,0, 0) 100%)`,
})

export const vignette = style({
  background:
    'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 32%, rgba(0,0,0,0.3) 71%, rgba(0,0,0,0.7) 100%)'
})

export const cardRecipe = recipe({
  base: [
    sprinkles({
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }),
    style({
      transition: 'all 0.2s ease-in-out',
      textDecoration: 'none'
    })
  ],
  variants: {
    elevation: {
      none: {
        boxShadow: 'none'
      },
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

// This could become a recipe of hover effects in the future and a prop on the Card component
export const onHoverScale = style({
  selectors: {
    '&:hover': {
      transform: 'scale(1.03)',
    }
  }
})

export type TCardRecipe = RecipeVariants<typeof cardRecipe>
