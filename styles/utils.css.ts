import { styleVariants } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from 'site/styles/sprinkles.css'
import { breakpoints, vars } from 'site/styles/theme.css'
import { calc } from '@vanilla-extract/css-utils'

export const hideFrom = recipe({
  variants: {
    tablet: {
      true: {
        '@media': {
          [breakpoints.x_tablet]: {
            display: 'none'
          }
        }
      }
    },
    laptop: {
      true: {
        '@media': {
          [breakpoints.xx_laptop]: {
            display: 'none'
          }
        }
      }
    },
    desktop: {
      true: {
        '@media': {
          [breakpoints.xxx_desktop]: {
            display: 'none'
          }
        }
      }
    }
  }
})

export const hideUntil = recipe({
  variants: {
    tablet: {
      true: {
        display: 'none',
        '@media': {
          [breakpoints.x_tablet]: {
            display: 'block'
          }
        }
      }
    },
    laptop: {
      true: {
        display: 'none',
        '@media': {
          [breakpoints.xx_laptop]: {
            display: 'block'
          }
        }
      }
    },
    desktop: {
      true: {
        display: 'none',
        '@media': {
          [breakpoints.xxx_desktop]: {
            display: 'block'
          }
        }
      }
    }
  }
})

export const activeIndicatorPartialUnderlineRecipe = recipe({
  base: [
    sprinkles({
      position: 'relative'
    }),
    {
      selectors: {
        '&:after': {
          content: '" "',
          position: 'absolute',
          transition: 'all 0.3s',
          bottom: 0,
          left: 0,
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
    },
    size: {
      small: {
        selectors: {
          '&:after': {
            width: '25px'
          }
        }
      },
      medium: {
        selectors: {
          '&:after': {
            width: '50px'
          }
        }
      }
    }
  },
  defaultVariants: {
    active: false,
    size: 'small'
  }
})

export const activeIndicatorFullUnderlineRecipe = recipe({
  base: [
    sprinkles({
      position: 'relative'
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

export const bleedRecipe = recipe({
  variants: {
    mobile: {
      small: {
        marginLeft: calc(vars.spacing.small).negate().toString(),
        marginRight: calc(vars.spacing.small).negate().toString()
      },
      medium: {
        marginLeft: calc(vars.spacing.medium).negate().toString(),
        marginRight: calc(vars.spacing.medium).negate().toString()
      },
      large: {
        marginLeft: calc(vars.spacing.large).negate().toString(),
        marginRight: calc(vars.spacing.large).negate().toString()
      }
    },
    laptop: {
      none: {
        '@media': {
          [breakpoints.xx_laptop]: {
            marginLeft: 0,
            marginRight: 0
          }
        }
      },
      small: {
        marginLeft: calc(vars.spacing.small).negate().toString(),
        marginRight: calc(vars.spacing.small).negate().toString()
      },
      medium: {
        marginLeft: calc(vars.spacing.medium).negate().toString(),
        marginRight: calc(vars.spacing.medium).negate().toString()
      },
      large: {
        marginLeft: calc(vars.spacing.large).negate().toString(),
        marginRight: calc(vars.spacing.large).negate().toString()
      }
    }
  }
})

export const genericHover = styleVariants({
  none: {},
  scaleUp: {
    selectors: {
      '&:hover': {
        transform: 'scale(1.05)'
      },
      '&:active': {
        transform: 'scale(1)'
      }
    }
  },
  scaleDown: {
    selectors: {
      '&:hover': {
        transform: 'scale(0.95)'
      },
      '&:active': {
        transform: 'scale(0.9)'
      }
    }
  },
  moveUp: {
    selectors: {
      '&:hover': {
        transform: 'translateY(-5px)'
      },
      '&:active': {
        transform: 'translateY(0)'
      }
    }
  }
})

export const absoluteStretch = sprinkles({
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0
})

export const linearGradient = styleVariants({
  horizontal: {
    background: `linear-gradient(90deg, ${vars.color.gradientFrom}, ${vars.color.gradientTo})`
  },
  vertical: {
    background: `linear-gradient(${vars.color.gradientFrom}, ${vars.color.gradientTo})`
  },
  diagonal: {
    background: `linear-gradient(135deg, ${vars.color.gradientFrom}, ${vars.color.gradientTo})`
  }
})
