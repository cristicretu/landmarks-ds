import { Box } from '../Box'
import { Button } from '../Button'
import { Popover } from '../Popover'
import { useTranslation } from 'next-i18next'
import { vars } from '@styles/theme.css'

import * as styles from './styles.css'

interface IProps {
  position: string
  title: string
  link?: string
  triggerColor?: keyof typeof vars.color
}

export function Poi({ position, title, link, triggerColor = 'primary' }: IProps) {
  const { t } = useTranslation()
  const [x, y] = position.split('/')

  const trigger = (
    <Box color={triggerColor} className={styles.poiTrigger}></Box>
  )

  return (
    <svg x={`${x}px`} y={`${y}px`}>
      <foreignObject width="80" height="80" x="0px" y="0px">
        <Popover trigger={trigger}>
          {title}
          {!!link && (
            <Button href={link} variant="contained" size="small" borderRadius="small" marginLeft="medium">
              {t('open')}
            </Button>
          )}
        </Popover>
      </foreignObject>
    </svg>
  )
}
