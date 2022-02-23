import * as styles from './styles.css'

import { Box } from '../Box'
import { Button } from '../Button'
import { IUIComponent } from '../../utils/types'
import { IoIosCheckmark } from 'react-icons/io'
import cn from 'classnames'
import { SplitText } from '../SplitText'
import { useTranslation } from 'next-i18next'
import { Typography } from '../Typography'

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
  const { t } = useTranslation()

  return (
    <Box className={cn(className, styles.container)} {...rest}>
      <Box
        className={styles.status({
          variant
        })}>
        {!!done ? (
          <IoIosCheckmark size={36} />
        ) : (
          <SplitText className={cn(styles.unfinished, styles.date)}>{date}</SplitText>
        )}
      </Box>
      <Box
        className={styles.detail({
          variant
        })}>
        <Box lineHeight="-1x">
          <Typography variant="p" className={cn({ [styles.unfinished]: !done })}>
            {title}
          </Typography>
          {!!done && (
            <Typography variant="small" color="neutral_3" textTransform="capitalize">
              {t('finalizat')} - {date}
            </Typography>
          )}
        </Box>
        {children}
      </Box>
    </Box>
  )
}
