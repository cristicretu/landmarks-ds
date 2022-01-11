import { ReactElement } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { Box, H4, H5 } from "landmarks-ds"
import { IUIComponent } from 'landmarks-ds/utils/types'

import * as styles from './styles.css'

interface IProps extends IUIComponent {
  title: string
  url?: string
  selected?: boolean
  extra?: ReactElement
}

export function ListItem({ title, url, selected, extra, className, ...rest }: IProps) {
  const content = (
    <Box
      component={url ? 'a' : 'div'}
      className={cn(styles.item, className, {
        [styles.selectedItem]: selected,
      })}
      display="flex"
      paddingY="medium"
      alignItems="center"
      justifyContent="space-between"
      {...rest}>
      <H5>{title}</H5>
      {extra && extra}
    </Box>
  )
  return url
    ? (
      <Link href={url} passHref>
        {content}
      </Link>
    )
    : content
}