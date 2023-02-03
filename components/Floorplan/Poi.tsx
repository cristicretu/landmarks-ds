import { Box } from '../Box'
import { Button } from '../Button'
import { Popover } from '../Popover'
import { useTranslation } from 'next-i18next'
import { vars } from '@styles/theme.css'

import * as styles from './styles.css'

interface IProps {
  triggerColor: keyof typeof vars.color
  position: string
  title: string
  link?: string
}

export function Poi({ position, title, link, triggerColor = 'primary' }: IProps) {
  const { t } = useTranslation()
  const [x, y] = position.split('/')

  return (
    <svg x={`${x}px`} y={`${y}px`}>
      <foreignObject width="80" height="80">
        <Popover
          trigger={
            <Box className={styles.poiTrigger}>
              <Box component="span" background={triggerColor} className={styles.poiDot} />
            </Box>
          }
          className={styles.poiTriggerContainer}>
          <Box lineHeight="1x">{title}</Box>
          {!!link && (
            <Button
              href={link}
              variant="contained"
              size="small"
              borderRadius="small"
              marginTop="medium">
              {t('open')}
            </Button>
          )}
        </Popover>
      </foreignObject>
    </svg>
  )
}
