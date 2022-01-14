import { breakpoints, vars } from 'site/styles/theme.css'

import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from 'site/styles/sprinkles.css'
import { style } from '@vanilla-extract/css'

export const container = sprinkles({
  display: 'flex',
  fontFamily: 'heading',
})

export const status = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
  ],
  variants: {
    variant: {
      normal: [
        sprinkles({
          background: 'neutral_2',
          textAlign: 'center',
        }),
        {
          width: '80px',
          lineHeight: '1.5',
        }
      ]
    }
  },
})

export const detail = recipe({
  base: [
    sprinkles({
      display: 'flex',
      justifyContent: { mobile: 'center', laptop: 'space-between' },
      alignItems: { mobile: 'flex-start', laptop: 'center' },
    }),
    style({
      flex: 1,
    })
  ],
  variants: {
    variant: {
      normal: [
        sprinkles({
          paddingX: { mobile: 'medium', laptop: 'xlarge' },
          paddingY: { mobile: 'medium', laptop: 'large' },
          flexDirection: { mobile: 'column', laptop: 'row' },
          color: 'neutral_5',
          background: 'neutral_1'
        }),
        {
          gap: vars.spacing.medium,
        }
      ]
    }
  },
})

export const date = sprinkles({
  padding: 'small'
})

export const unfinished = sprinkles({
  color: 'neutral_3'
})
