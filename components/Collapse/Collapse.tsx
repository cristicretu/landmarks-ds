import { useState } from 'react'
import cn from 'classnames'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import { H5 } from '../Headings'
import { Box } from '../Box'
import * as styles from './styles.css'
import { Typography } from '../Typography'

interface IProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function Collapse({ title, children, defaultOpen = false }: IProps) {
  const [isOpen, setOpen] = useState(defaultOpen)

  return (
    <Box
      component="section"
      position="relative"
      paddingY="large"
      className={cn(styles.collapse, styles.toggleVariant[isOpen ? 'open' : 'closed'])}
      onClick={() => setOpen(!isOpen)}>
      <Box
        position="absolute"
        fontSize="2x"
        className={styles.icon}>
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </Box>
      <Typography
        variant="h5"
        cursor="pointer"
        paddingRight="xxlarge"
        textTransform="capitalize"
        opacity="0.7">
        {title}
      </Typography>
      <div className={styles.content}>{children}</div>
    </Box>
  )
}