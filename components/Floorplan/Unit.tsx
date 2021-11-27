import { useEffect, useRef } from 'react'
import { animated } from 'react-spring'
import cn from 'classnames'
import Link from 'next/link'

import * as styles from './styles.css'
import { isAvailable } from '../../utils'
import { EUnitStatus } from '../../utils/types'

const defaultClasses = {
  disponibil: styles.unitStatusVariants.disponibil,
  rezervat: styles.unitStatusVariants.rezervat,
  vandut: styles.unitStatusVariants.vandut,
  inactiv: styles.unitStatusVariants.inactiv,
}

interface IProps {
  path: string
  url: string
  position: string
  status: keyof typeof styles.unitStatusVariants
  number: string | null
  rooms: number
  animation?: any
  className?: string
  classes?: Partial<typeof defaultClasses>
}

export function Unit({ path, url, position, status = EUnitStatus.inactiv, animation, number, rooms, className, classes }: IProps) {
  const [x, y] = position.split('/')
  const modelGroup = useRef<SVGGElement>(null)
  const inactiv = !isAvailable(status)
  const mergedClasses = {
    ...defaultClasses,
    ...classes,
  }

  useEffect(() => {
    if (modelGroup.current) {
      const roomNumberEl = modelGroup?.current?.querySelector('.cls-2 tspan')
      const descriptionEl = modelGroup?.current?.querySelector('.cls-3 tspan')
      // Overwrite apartment number from UnitModel.svg
      if (roomNumberEl) {
        roomNumberEl.innerHTML = number || '00'
      }
      // Replace room count with status
      if (descriptionEl) {
        const description = inactiv
          ? status
          : rooms === 1
            ? 'o cameră'
            : `${rooms} camere`
        descriptionEl.innerHTML = description
      }
    }
  }, [number])

  const withoutLink = (
    <animated.g
      ref={modelGroup}
      style={animation}
      dangerouslySetInnerHTML={{ __html: path }} />
  )

  const withLink = (
    <Link href={url}>
      <a>
        {withoutLink}
      </a>
    </Link>
  )

  return (
    <svg
      className={cn(styles.unit, className, mergedClasses[status], {
        [styles.unitInactiv]: inactiv
      })}
      x={`${x}px`} y={`${y}px`}>
      {inactiv ? withoutLink : withLink}
    </svg>
  )
}