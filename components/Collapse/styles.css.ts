import { sprinkles } from '@styles/sprinkles.css'
import { vars } from '@styles/theme.css'
import { style, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { calc } from '@vanilla-extract/css-utils'

function createSelector(classes: string) {
  return classes.replaceAll(' ', '.')
}

export const collapseRecipe = recipe({
  variants: {
    open: {
      true: {},
      false: {}
    },
    variant: {
      clean: {},
      underline: {
        borderBottom: `1px solid ${vars.color.neutral_1}`,
        paddingTop: vars.spacing.medium,
        paddingBottom: vars.spacing.medium
      },
      fill: {
        padding: vars.spacing.large,
      }
    }
  },
  compoundVariants: [
    {
      variants: {
        variant: 'fill',
        open: true
      },
      style: {
        background: vars.color.surfaceFaded,
        marginBottom: vars.spacing.large,
        borderRadius: vars.border.radius.small,
        transition: 'all 0.5s'
      }
    }
  ]
})

export const trigger = style([
  sprinkles({
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'link'
  }),
  {
    selectors: {
      [`${createSelector(
        collapseRecipe({
          variant: 'underline'
        })
      )} &`]: {
        justifyContent: 'space-between',
        width: '100%'
      },
      [`${createSelector(
        collapseRecipe({
          variant: 'fill',
        })
      )} &`]: {
        // background: vars.color.surfaceFaded
      }
    }
  }
])

export const root = style([
  sprinkles({
    // paddingY: 'medium'
  })
])

export const icon = style({
  selectors: {
    [`${createSelector(
      collapseRecipe({
        variant: 'fill'
      })
    )} &`]: {
      padding: vars.spacing.medium,
      background: vars.color.white,
      borderRadius: vars.border.radius.full,
      transform: `translateX(${calc(vars.spacing.small).negate()})`,
      order: -1
    }
  }
})

export type TCollapseRecipe = RecipeVariants<typeof collapseRecipe>
