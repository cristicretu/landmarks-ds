import * as styles from './styles.css'

import { Box } from '../Box'
import { Button } from '../Button'
import { IUIComponent } from '../../utils/types'
import { IoIosCheckmark } from 'react-icons/io'
import cn from 'classnames'
import { SplitText } from '../SplitText'

interface ITimelineProps extends IUIComponent {
  children?: any
  date: string
  title: string
  done: boolean
  [key: string]: any
}

export function TimelineEvent({
  children,
  date,
  title,
  className,
  done = false,
  variant = 'normal',
  ...rest
}: ITimelineProps) {
  return (
    <Box className={cn(className, styles.container)} {...rest}>
      <Box className={styles.status({
        variant
      })}>
        {!!done ? (
          <IoIosCheckmark size={36} />
        ) : (
          <SplitText className={cn(styles.unfinished, styles.date)}>{date}</SplitText>
        )}
      </Box>
      <Box className={styles.detail({
        variant
      })}>
        <p className={cn({ [styles.unfinished]: !done })}>{title}</p>
        {children}
      </Box>
    </Box>
  )
}
