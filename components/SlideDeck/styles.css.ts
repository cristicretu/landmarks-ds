import { sprinkles } from '@styles/sprinkles.css'
import { breakpoints, vars } from '@styles/theme.css'
import { style, globalStyle } from '@vanilla-extract/css'
import { leftButton, rightButton, emblaButton } from 'landmarks-ds/components/Carousel/styles.css'

const HEIGHT = '80vh'
const BOTTOM_SPACING = vars.spacing.xxlarge

export const invertedGallery = style({})

export const sixtyToFullHeight = style([
  {
    height: '60vh',

    '@media': {
      [breakpoints.xx_laptop]: {
        height: HEIGHT
      }
    }
  }
])

export const goldenGallery = style([
  sprinkles({
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    flexDirection: { mobile: 'column', laptop: 'row' }
  }),
  {
    selectors: {
      // no space is important because both classes are on the same element:
      // .goldenGallery.invertedGallery
      [`${invertedGallery}&`]: {
        '@media': {
          [breakpoints.xx_laptop]: {
            flexDirection: 'row-reverse'
          }
        }
      }
    }
  }
])

export const vw40 = style({
  '@media': {
    [breakpoints.xx_laptop]: {
      width: '40vw'
    }
  }
})

export const vw60 = style({
  '@media': {
    [breakpoints.xx_laptop]: {
      width: '60vw'
    }
  }
})

export const contentAbove = style([
  {
    // let clicks pass through so user can swipe carousell
    '@media': {
      [breakpoints.xx_laptop]: {
        padding: 'inherit',
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      }
    }
  }
])

export const textContent = style([
  sprinkles({
    padding: { laptop: 'large' }
  }),
  {
    '@media': {
      [breakpoints.xx_laptop]: {
        position: 'absolute',
        left: 0,
        right: 0,
        color: 'inherit',
        padding: 0,
        // position: "inherit",
        bottom: BOTTOM_SPACING
      }
    }
  }
])

export const bottomContent = style([
  sprinkles({
    // background: 'black_alpha_04',
    paddingTop: { mobile: 'xlarge', laptop: 'none' },
    paddingX: 'large'
  }),
  {
    '@media': {
      [breakpoints.xx_laptop]: {
        position: 'absolute',
        top: 'initial',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'none'
      }
    }
  }
])

export const contentLeft = style([
  {
    width: '540px',
    position: 'relative',
    '@media': {
      [breakpoints.xx_laptop]: {
        height: '100%'
      }
    }
  }
])

export const fullContainer = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  }),
  {
    padding: 0,
    '@media': {
      [breakpoints.xx_laptop]: {
        height: '100%',
        paddingLeft: vars.spacing.medium,
        paddingRight: vars.spacing.medium
      }
    },
    selectors: {
      [`${invertedGallery} &`]: {
        flexDirection: 'row-reverse'
      }
    }
  }
])

export const name = style([
  sprinkles({
    textTransform: 'uppercase',
    display: { mobile: 'none', laptop: 'block' }
  }),
  {
    textDecoration: 'underline'
  }
])

export const slideFromLeft = style({
  '@media': {
    [breakpoints.xx_laptop]: {
      opacity: 0,
      transform: 'translateX(-20vh)'
    }
  }
})

export const slideFromRight = style({
  '@media': {
    [breakpoints.xx_laptop]: {
      opacity: 0,
      transform: 'translateX(20vh)'
    }
  }
})

export const transitionEnd = style({
  '@media': {
    [breakpoints.xx_laptop]: {
      transform: 'translateX(0)',
      opacity: 1
    }
  }
})

globalStyle(`${goldenGallery} ${emblaButton}`, {
  top: 'initial',
  bottom: 0,
  transform: 'none',
  // buttons can take their color from the parent
  background: 'inherit',
  color: 'inherit',
  '@media': {
    [breakpoints.xx_laptop]: {
      bottom: BOTTOM_SPACING
    }
  }
})

globalStyle(`${goldenGallery} ${emblaButton} button`, {
  background: 'inherit',
  color: 'inherit'
})

globalStyle(`${goldenGallery} ${rightButton}`, {
  right: 'initial',
  left: '63px',
  '@media': {
    [breakpoints.xx_laptop]: {
      left: '100px'
    }
  }
})

globalStyle(`${goldenGallery}${invertedGallery} ${rightButton}`, {
  left: 'initial',
  right: 0,
  '@media': {
    [breakpoints.xx_laptop]: {
      right: vars.spacing.large
    }
  }
})

globalStyle(`${goldenGallery}${invertedGallery} ${leftButton}`, {
  left: 'initial',
  right: '63px',
  '@media': {
    [breakpoints.xx_laptop]: {
      right: '100px'
    }
  }
})
