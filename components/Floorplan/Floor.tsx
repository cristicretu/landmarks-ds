import Link from 'next/link'
import { animated } from 'react-spring'
import cn from 'classnames'

import * as styles from './styles.css'
import { Typography } from '../Typography'

interface IProps {
  path: string
  url: string
  position: string
  pinPosition: string
  title: string
  unitsCount: number
  availableUnitsCount: number
  animation?: any

  classes?: {
    floor?: string
    pin?: string
  }
}

export function Floor({ path, url, position, pinPosition, title, unitsCount, availableUnitsCount, animation = {}, classes }: IProps) {
  const [x, y] = position.split('/')
  const [pinX, pinY] = pinPosition.split('/')
  const isActive = true
  // const isActive = availableUnitsCount > 0
  const description = availableUnitsCount === 0
    ? 'inactiv'
    : availableUnitsCount === 1
      ? 'unul disponibil'
      : `mai multe disponibile ${availableUnitsCount}`

  const contentWithoutLink = (
    <>
      <animated.foreignObject
        width="180"
        height="96"
        x={`${pinX}px`}
        y={`${pinY}px`}
        className={styles.foreignObject}
        style={animation}>
        <Typography variant="h3">{title}</Typography>
      </animated.foreignObject>
      <g className={classes?.floor} dangerouslySetInnerHTML={{ __html: path }} />
    </>
  )

  const contentWithLink = (
    (<Link href={url} title={'something else'}>

      {contentWithoutLink}

    </Link>)
  )

  return (
    <svg
      className={cn(styles.buildingSVG, { [styles.enabledBuildingSVG]: isActive })}
      x={`${x}px`} y={`${y}px`}>
      {isActive ? contentWithLink : contentWithoutLink}
    </svg>
  )
}