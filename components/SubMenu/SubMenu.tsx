import { useState, useEffect, ReactElement, Children, cloneElement } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { useDrag } from '@use-gesture/react'
import cn from 'classnames'

import { Box, H3, useWindowSize } from 'landmarks-ds'
import * as styles from './styles.css'
import { overwrites } from 'site/styles/theme.css'
import { IUIComponent } from '../../utils/types'

interface IProps extends IUIComponent {
  title: string
  subtitle: string
  children: ReactElement | ReactElement[]
  actionLeft?: ReactElement
  actionRight?: ReactElement
}

const UNKNOWN_OFFSET_Y = 7

export function SubMenu({ title, subtitle, children, actionLeft, actionRight, className, ...rest }: IProps) {
  const [windowWidth] = useWindowSize(true, false)
  const isMobile = windowWidth < 991
  const [isOpen, setOpen] = useState(false)
  const height = 400
  const [{ y }, api] = useSpring(() => ({ y: height }))
  const open = ({ canceled }: any) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    setOpen(true)
    api.start({ y: 0, immediate: false, config: canceled ? config.wobbly : config.stiff })
  }
  const close = (velocity = 0) => {
    setOpen(false)
    api.start({ y: height, immediate: false, config: { ...config.stiff, velocity } })
  }
  const bind = useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel, canceled }) => {
      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      // if (my < -70) cancel()

      // when the user releases the sheet, we check whether it passed
      // the threshold for it to close, or if we reset it to its open position
      if (last) {
        if (isOpen) {
          (my > height * 0.5 || (vy > 0.5 && dy > 0))
            ? close(vy)
            : open({ canceled })
        } else {
          (my < -70 || (vy > 0.5 && dy < 0))
            ? open({ canceled })
            : close(vy)
        }
      }
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position (with height offset when !isOpen)
      else api.start({ y: isOpen ? my : my + height, immediate: true })
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  return (
    <animated.div
      className={cn(styles.container, className)}
      style={isMobile ? {
        bottom: `calc(-100vh + ${height + overwrites.MENU_HEIGHT + UNKNOWN_OFFSET_Y}px)`,
        height: `calc(100vh + ${overwrites.MENU_HEIGHT}px)`,
        y
      } : {}}>
      <animated.div {...bind()} className={styles.headerContainer}>
        <Box
          display="flex"
          background="quaternary"
          color="white"
          textAlign="center"
          justifyContent="center"
          className={styles.stretch}>

          {actionLeft}

          <Box
            className={styles.header}
            paddingY="small"
            onClick={() => isOpen ? close() : open({ canceled: false })}>
            <H3>{title}</H3>
            <span>{subtitle}</span>
          </Box>

          {actionRight}
        </Box>
      </animated.div>
      <Box
        background="secondary"
        paddingY="large"
        style={{ height: '100%' }}>
        <Box
          paddingX="large"
          style={isMobile ? { height: `${height - 50}px`, overflow: 'auto' } : {}}>
          {Children.map(children, (child) => {
            return cloneElement(child, {
              onClick: () => close(2)
            })
          })}
        </Box>
      </Box>
    </animated.div>
  )
}