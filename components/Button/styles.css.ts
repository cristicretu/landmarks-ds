import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { style, styleVariants } from '@vanilla-extract/css'

import { sprinkles } from 'site/styles/sprinkles.css'
import { vars } from 'site/styles/theme.css'

// Conditionally changing the padding based on the size of the button
export const suffix = styleVariants({
  small: {
    paddingRight: vars.spacing.xsmall
  },
  medium: {
    paddingRight: vars.spacing.small
  },
  large: {
    paddingRight: vars.spacing.medium
  }
})

export const prefix = styleVariants({
  small: {
    paddingLeft: vars.spacing.xsmall
  },
  medium: {
    paddingLeft: vars.spacing.small
  },
  large: {
    paddingLeft: vars.spacing.medium
  }
})

export const button = recipe({
  // default attributes
  base: [
    sprinkles({
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      textTransform: 'uppercase'
    }),
    style({
      whiteSpace: 'nowrap',
      justifyContent: 'center',
      userSelect: 'none',
      display: 'inline-flex',
      outline: 'none',
      transition: 'all 0.2s ease-in-out',
      fontFamily: vars.font.body,
      textDecoration: 'none',
      flexShrink: 0,
    })
  ],
  variants: {
    size: {
      // line height needs to be added
      small: sprinkles({
        fontSize: '-1x',
        paddingX: 'small',
        paddingY: 'xsmall'
      }),
      medium: sprinkles({
        fontSize: '1x',
        paddingX: 'medium',
        paddingY: 'small'
      }),
      large: sprinkles({
        fontSize: '2x',
        paddingX: 'large',
        paddingY: 'medium'
      })
    },
    hue: {
      primary: {},
      secondary: {},
      onLight: {},
      onDark: {},
    },
    variant: {
      text: {
        border: 'none' // not sure about this reset
      },
      contained: {
        border: 'none'
      },
      outlined: {},
      underlined: {
        borderLeft: 'none',
        borderTop: 'none',
        borderRight: 'none'
      }
    },
    disabled: {
      // you can combine both sprinkles and regular styles by using an array
      true: [
        // don't overwrite styles using sprinkles because it's not working.
        // sprinkles({
        //   background: 'neutral_1',
        //   color: 'neutral_4',
        // }),
        // when you need to overwrite styles, use `styles({})`. This works simply because it's compiled in the .css *after* the sprinkles styles, so it's got higher priority.
        style({
          cursor: 'not-allowed'
        })
      ],
      false: style({
        cursor: 'pointer'
      })
    }
  },

  compoundVariants: [
    // text
    {
      variants: {
        variant: 'text',
        hue: 'primary'
      },
      style: sprinkles({
        color: 'primary',
        background: 'transparent'
      })
    },
    {
      variants: {
        variant: 'text',
        hue: 'secondary'
      },
      style: sprinkles({
        color: 'secondary',
        background: 'transparent'
      })
    },
    {
      variants: {
        variant: 'text',
        hue: 'onLight'
      },
      style: sprinkles({
        color: 'neutral_5',
        background: 'transparent'
      })
    },
    {
      variants: {
        variant: 'text',
        hue: 'onDark'
      },
      style: sprinkles({
        color: 'white',
        background: 'transparent'
      })
    },
    // contained
    {
      variants: {
        variant: 'contained',
        hue: 'primary'
      },
      style: sprinkles({
        color: 'white',
        background: 'primary'
      })
    },
    {
      variants: {
        variant: 'contained',
        hue: 'secondary'
      },
      style: sprinkles({
        color: 'white',
        background: 'secondary'
      })
    },
    {
      variants: {
        variant: 'contained',
        hue: 'onLight'
      },
      style: sprinkles({
        color: 'neutral_0',
        background: 'black_alpha_08',
      })
    },
    {
      variants: {
        variant: 'contained',
        hue: 'onDark'
      },
      style: sprinkles({
        color: 'neutral_6',
        background: 'white_alpha_08',
      })
    },
    // outlined
    {
      variants: {
        variant: 'outlined',
        hue: 'primary'
      },
      style: [
        sprinkles({
          color: 'primary',
          background: 'transparent'
        }),
        style({
          border: `1px solid ${vars.color.primary}`
        })
      ]
    },
    {
      variants: {
        variant: 'outlined',
        hue: 'secondary'
      },
      style: [
        sprinkles({
          color: 'secondary',
          background: 'transparent'
        }),
        style({
          border: `1px solid ${vars.color.secondary}`
        })
      ]
    },
    {
      variants: {
        variant: 'outlined',
        hue: 'onLight'
      },
      style: [
        sprinkles({
          color: 'black_alpha_08',
          background: 'transparent'
        }),
        style({
          border: `1px solid ${vars.color.black_alpha_04}`
        })
      ]
    },
    {
      variants: {
        variant: 'outlined',
        hue: 'onDark'
      },
      style: [
        sprinkles({
          color: 'white_alpha_08',
          background: 'transparent'
        }),
        style({
          border: `1px solid ${vars.color.white_alpha_04}`
        })
      ]
    },
    // underlined
    {
      variants: {
        variant: 'underlined',
        hue: 'primary'
      },
      style: [
        sprinkles({
          color: 'primary',
          background: 'transparent'
        }),
        style({
          borderBottom: `2px solid ${vars.color.primary}`
        })
      ]
    },
    {
      variants: {
        variant: 'underlined',
        hue: 'secondary'
      },
      style: [
        sprinkles({
          color: 'secondary',
          background: 'transparent'
        }),
        style({
          borderBottom: `2px solid ${vars.color.secondary}`
        })
      ]
    },
    {
      variants: {
        variant: 'underlined',
        hue: 'onLight'
      },
      style: [
        sprinkles({
          color: 'black_alpha_08',
          background: 'transparent'
        }),
        style({
          borderBottom: `2px solid ${vars.color.black_alpha_04}`
        })
      ]
    },
    {
      variants: {
        variant: 'underlined',
        hue: 'onDark'
      },
      style: [
        sprinkles({
          color: 'white_alpha_08',
          background: 'transparent'
        }),
        style({
          borderBottom: `2px solid ${vars.color.white_alpha_04}`
        })
      ]
    },
    {
      variants: {
        variant: 'text',
        disabled: true
      },
      style: {
        color: vars.color.neutral_4
      }
    },
    {
      variants: {
        variant: 'contained',
        disabled: true
      },
      style: {
        background: vars.color.neutral_1,
        color: vars.color.neutral_4
      }
    },
    {
      variants: {
        variant: 'outlined',
        disabled: true
      },
      style: {
        borderColor: vars.color.neutral_4,
        color: vars.color.neutral_4
      }
    },
    {
      variants: {
        variant: 'underlined',
        disabled: true
      },
      style: {
        borderColor: vars.color.neutral_4,
        color: vars.color.neutral_4
      }
    }
  ],

  defaultVariants: {
    size: 'medium',
    variant: 'contained',
    hue: 'primary',
    disabled: false
  }
})

export type TButtonRecipe = RecipeVariants<typeof button>
