import { ReactElement, cloneElement, useCallback, useState } from 'react'

import { Atoms } from 'site/styles/sprinkles.css'
// @ts-ignore
import Plx from 'react-plx'
import { useWindowSize } from '../../main'
import { Box } from '../Box'
import { noop } from '../../utils'

interface IReturnProps {
  width: number
  height: number
}

interface IProps extends Atoms {
  layout: 'full' | 'twothirds' | 'square'
  ratio: number
  children: ReactElement | ((size: IReturnProps) => ReactElement)
  parallaxData?: any
  onPlxStart?: () => void
  onPlxEnd?: () => void
}

const defaultPlx = [
  {
    start: 'self',
    startOffset: '25vh',
    duration: '100vh',
    properties: [
      {
        startValue: 0,
        endValue: -150,
        property: 'translateX'
      }
    ]
  }
]

export function RevealX({
  children,
  layout,
  ratio,
  parallaxData = defaultPlx,
  onPlxEnd = noop,
  onPlxStart = noop,
  ...rest
}: IProps) {
  const [isActive, setActive] = useState(false)
  const [windowWidth, windowHeight] = useWindowSize(false, false)
  const getSizeFromLayout = useCallback(
    (layout: any) => {
      if (layout === 'full') {
        const height = windowHeight + 20
        const width = height * ratio
        return {
          width,
          height
        }
        // default return layout="square"
      } else {
        const height = windowWidth
        const width = height * ratio
        return {
          width,
          height
        }
      }
    },
    [windowWidth]
  )

  const renderChildren = useCallback(() => {
    const dimensions = getSizeFromLayout(layout)
    if (typeof children === 'function') {
      return children(dimensions)
    }
    return cloneElement(children, {
      ...dimensions,
      sizes: `${dimensions.width}px`
    })
  }, [children])

  return (
    <Box
      position="relative"
      style={{
        // when creating full parallax effect, container needs to be 100vh larger
        ...(layout === 'full' && { height: `calc(${parallaxData[0].end} + 100vh)` })
      }}
      {...rest}>
      <Box
        position="sticky"
        top={0}
        style={{
          overflow: 'hidden'
        }}>
        <Plx
          parallaxData={parallaxData}
          onPlxStart={() => setActive(true)}
          onPlxEnd={() => setActive(false)}>
          {renderChildren()}
        </Plx>
      </Box>
    </Box>
  )
}
