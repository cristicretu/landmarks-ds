import { sprinkles } from '@styles/sprinkles.css'
import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

export const tagLineWrapper = style([
  sprinkles({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 3
  })
])

export const tagLineContainer = style([
  sprinkles({
    display: 'grid'
  })
])

export const overlay = style([
  sprinkles({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    background: 'black_alpha_04'
  })
])

export const alignHorizontalRecipe = recipe({
  variants: {
    alignHorizontal: {
      left: {
        justifyItems: 'flex-start'
      },
      center: {
        justifyItems: 'center'
      },
      right: {
        justifyItems: 'flex-end'
      }
    }
  }
})

export const alignVerticalRecipe = recipe({
  variants: {
    alignVertical: {
      top: {
        alignContent: 'flex-start'
      },
      center: {
        alignContent: 'center'
      },
      bottom: {
        alignContent: 'flex-end'
      }
    }
  }
})

export type TAlignHorizontalRecipe = RecipeVariants<typeof alignHorizontalRecipe>
export type TAlignVerticalRecipe = RecipeVariants<typeof alignVerticalRecipe>
