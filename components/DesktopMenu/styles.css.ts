import { style } from '@vanilla-extract/css'
import { sprinkles } from 'site/styles/sprinkles.css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints, vars } from 'site/styles/theme.css'

export const hideOnMobile = style({
  display: 'none',

  '@media': {
    [breakpoints.xx_laptop]: {
      display: 'inherit',
    }
  }
})

export const noPadding = style({
  padding: 0,
})

export const stickyMenu = style({
  '@media': {
    [breakpoints.xx_laptop]: {
      position: 'sticky',
      zIndex: 3,
      top: 0,
      left: 0,
      right: 0
    }
  }
})

export const mainButton = style({
  display: 'none',

  '@media': {
    [breakpoints.xx_laptop]: {
      display: 'flex',
    }
  }
})

// only handles text color based on light/dark background, also hover color
export const lightDarkRecipe = recipe({
  base: [
    // should all these defaults be here?
    sprinkles({
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
    }),
    {
      textDecoration: 'none',
    }
  ],
  variants: {
    hue: {
      onLight: {
        selectors: {
          '&:hover': {
            color: vars.color.neutral_6
          }
        }
      },
      onDark: {
        selectors: {
          '&:hover': {
            color: vars.color.neutral_0
          }
        }
      },
    },
    active: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        hue: 'onLight',
        active: true,
      },
      style: sprinkles({
        color: 'neutral_6'
      })
    },
    {
      variants: {
        hue: 'onLight',
        active: false,
      },
      style: sprinkles({
        color: 'onLight'
      })
    },
    {
      variants: {
        hue: 'onDark',
        active: true,
      },
      style: sprinkles({
        color: 'neutral_0'
      })
    },
    {
      variants: {
        hue: 'onDark',
        active: false,
      },
      style: sprinkles({
        color: 'onDark'
      })
    }
  ]
})

export const variantRecipe = recipe({
  base: [],
  variants: {
    variant: {
      regular: {},
      split: sprinkles({
        textTransform: 'uppercase',
        paddingBottom: 'small',
        lineHeight: '1x',
      }),
    }
  }
})

export type TLightDarkRecipe = RecipeVariants<typeof lightDarkRecipe>
export type TVariantRecipe = RecipeVariants<typeof variantRecipe>
