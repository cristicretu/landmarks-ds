import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from 'site/styles/sprinkles.css'

export const headingRecipe = recipe({
  base: style([
    sprinkles({
    }),
    {
      fontWeight: 'bold',
    }
  ]),
  variants: {
    variant: {
      // large headings don't fit on mobile
      h1: sprinkles({
        fontFamily: 'heading',
        fontSize: { mobile: '7x', laptop: '8x' },
        lineHeight: { mobile: '7x', laptop: '8x' },
      }),
      h2: sprinkles({
        fontFamily: 'heading',
        fontSize: { mobile: '6x', laptop: '7x' },
        lineHeight: { mobile: '6x', laptop: '7x' }
      }),
      // smaller headings fit on mobile just fine
      h3: sprinkles({
        fontFamily: 'heading',
        fontSize: '5x',
        lineHeight: '5x',
      }),
      h4: sprinkles({
        fontFamily: 'heading',
        fontSize: '3x',
        lineHeight: '3x',
      }),
      h5: sprinkles({
        fontFamily: 'heading',
        fontSize: '2x',
        lineHeight: '2x',
      }),
      h6: sprinkles({
        fontFamily: 'heading',
        fontSize: '1x',
        lineHeight: '1x',
      }),
      span: sprinkles({
        fontSize: '1x',
        lineHeight: '1x',
      }),
      small: sprinkles({
        fontSize: '-1x',
        lineHeight: '-1x',
      }),
      xsmall: sprinkles({
        fontSize: '-2x',
        lineHeight: '-2x',
      }),
    }
  }
})

export type THeadingRecipe = RecipeVariants<typeof headingRecipe>
