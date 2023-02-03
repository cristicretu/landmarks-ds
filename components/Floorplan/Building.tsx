import Link from 'next/link'
import { animated } from 'react-spring'
import { useTranslation } from 'next-i18next'
import cn from 'classnames'

import * as styles from './styles.css'

interface IProps {
  path: string
  url: string
  position: string
  pinPosition: string
  title: string
  availableUnitsCount: number
  description?: string
  animation?: any
}

export function Building({
  path,
  url,
  position,
  pinPosition,
  title,
  description,
  availableUnitsCount,
  animation = {}
}: IProps) {
  const { t } = useTranslation()
  const [x, y] = position.split('/')
  const [pinX, pinY] = pinPosition.split('/')
  const isActive = availableUnitsCount > 0
  const unitsAvailableDescription =
    availableUnitsCount === 0
      ? t('inactive')
      : availableUnitsCount === 1
      ? t('oneAvailableApartment')
      : t('multipleAvailableApartments', { count: availableUnitsCount })

  const contentWithoutLink = (
    <>
      <animated.foreignObject
        width="200"
        height="96"
        x={`${pinX}px`}
        y={`${pinY}px`}
        className={styles.foreignObject}
        style={animation}>
        <div className={styles.pin}>
          <div className={styles.pinTitle}>
            <strong>{title}</strong>
          </div>
          <div className={styles.pinDescription}>{description || unitsAvailableDescription}</div>
        </div>
      </animated.foreignObject>
      <g className={styles.building} dangerouslySetInnerHTML={{ __html: path }} />
    </>
  )

  const contentWithLink = (
    <Link href={url} title={t('viewBuilding')}>
      {contentWithoutLink}
    </Link>
  )

  return (
    <svg
      className={cn(styles.buildingSVG, { [styles.enabledBuildingSVG]: isActive })}
      x={`${x}px`}
      y={`${y}px`}>
      {isActive ? contentWithLink : contentWithoutLink}
    </svg>
  )
}
