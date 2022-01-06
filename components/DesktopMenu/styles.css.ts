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

export const stickyMenu = style([
  sprinkles({
    position: 'fixed',
    zIndex: 3,
  }),
  {
    top: 0,
    left: 0,
    right: 0,
  }
])

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
      split: [
        sprinkles({
          textTransform: 'uppercase',
          paddingBottom: 'small',
        }),
        {
          lineHeight: '1.5rem',
        }
      ]
    }
  }
})

export const activeIndicatorPartialUnderlineRecipe = recipe({
  base: [
    sprinkles({
      position: 'relative',
    }),
    {
      selectors: {
        '&:after': {
          content: '" "',
          position: 'absolute',
          transition: 'all 0.3s',
          bottom: 0,
          left: 0,
          width: '25px',
          // neutral 3 works on both light and dark
          borderBottom: `3px solid ${vars.color.neutral_3}`
        }
      }
    }
  ],
  variants: {
    active: {
      true: {
        selectors: {
          '&:after': {
            borderBottomColor: vars.color.primary
          }
        }
      },
      false: {
        selectors: {
          '&:after': {
            opacity: 0,
            transform: 'translateY(10px)'
          },
          '&:hover:after': {
            opacity: 1,
            transform: 'translateY(0px)'
          }
        }
      }
    }
  }
})

export const activeIndicatorFullUnderlineRecipe = recipe({
  base: [
    sprinkles({
      position: 'relative',
    }),
    {
      selectors: {
        '&:after': {
          content: '" "',
          position: 'absolute',
          transition: 'all 0.3s',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottom: `2px solid ${vars.color.neutral_3}`
        }
      }
    }
  ],
  variants: {
    active: {
      true: {
        selectors: {
          '&:after': {
            borderBottomColor: vars.color.primary
          }
        }
      },
      false: {
        selectors: {
          '&:after': {
            opacity: 0,
            transform: 'scaleX(0.4)'
          },
          '&:hover:after': {
            opacity: 1,
            transform: 'scaleX(1)'
          }
        }
      }
    }
  }
})

export type TLightDarkRecipe = RecipeVariants<typeof lightDarkRecipe>
export type TVariantRecipe = RecipeVariants<typeof variantRecipe>
