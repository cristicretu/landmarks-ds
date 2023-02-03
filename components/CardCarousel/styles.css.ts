import { breakpoints, vars } from 'site/styles/theme.css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const card = style({
  minWidth: 'calc(100vw - 80px)',
  '@media': {
    [breakpoints.xx_laptop]: {
      minWidth: 'auto'
    }
  }
})


export const cardCarouselRecipe = recipe({
  base: style([
    sprinkles({
      paddingX: 'large',
      paddingTop: 'large',
      paddingBottom: 'xxlarge',
      display: { mobile: 'flex', laptop: 'grid' },
      userSelect: 'none',
    }),
    {
      gap: vars.spacing.xlarge,
      overflow: 'auto',
      scrollbarWidth: 'none',
      selectors: {
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      },
      '@media': {
        [breakpoints.xx_laptop]: {
          overflow: 'visible',
          // gridTemplateColumns: '3'
          // gridColumn: '3'
          gap: vars.spacing.xxlarge,
        }
      }
    }
  ]),
  variants: {
    columns: {
      2: {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      3: {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      },
      4: {
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))'
      }
    }
  }
})

export type TCardCarouselRecipe = RecipeVariants<typeof cardCarouselRecipe>
