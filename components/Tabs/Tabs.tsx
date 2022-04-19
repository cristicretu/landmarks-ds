import * as RadixTabs from '@radix-ui/react-tabs'
import cn from 'classnames'
import { useCallback, useRef } from 'react'
import { IUIComponent } from '../../utils/types'
import { Box } from '../Box'

import * as styles from './styles.css'

interface ITabsProps extends IUIComponent {
  name?: string
  [key: string]: any
}

export function TabsRoot({ className, name, ...rest }: ITabsProps) {
  const containerRef = useRef<HTMLElement>(null)
  const onValueChange = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView()
    }
  }, [])
  return (
    <Box
      innerRef={containerRef}
      id={name}
      onValueChange={onValueChange}
      className={cn(styles.tabsRoot, className)}
      component={RadixTabs.Root}
      {...rest}
    />
  )
}

export function TabsList({ className, ...rest }: ITabsProps) {
  return <Box className={cn(styles.tabsList, className)} component={RadixTabs.List} {...rest} />
}

export function TabsTrigger({ className, ...rest }: ITabsProps) {
  return (
    <Box className={cn(styles.tabsTrigger, className)} component={RadixTabs.Trigger} {...rest} />
  )
}

export function TabsContent({ className, ...rest }: ITabsProps) {
  return (
    <Box className={cn(styles.tabsContent, className)} component={RadixTabs.Content} {...rest} />
  )
}
