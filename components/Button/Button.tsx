import * as styles from './styles.css'
import * as styleUtils from 'site/styles/utils.css'

import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import React from 'react'
import { ReactElement } from 'react'
import { TButtonRecipe } from './styles.css'
import cn from 'classnames'
import { SmartLink } from '../SmartLink'

interface IProps extends IUIComponent {
  children?: any
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  hover?: keyof typeof styleUtils.genericHover
  disabled?: boolean
  prefix?: ReactElement
  suffix?: ReactElement
  [key: string]: any
}

export function Button({
  children,
  className,
  variant = 'contained',
  size = 'medium',
  hue = 'primary',
  suffix,
  prefix,
  hover = 'scaleUp',
  disabled = false,
  onClick,
  href,
  ...rest
}: IProps & TButtonRecipe) {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    onClick && onClick(e)
  }

  return (
    <Box
      onClick={clickHandler}
      component={href ? SmartLink : 'button'}
      disabled={disabled}
      className={cn(
        className,
        styles.button({
          variant,
          size,
          hue,
          disabled
        }),
        {
          [styleUtils.genericHover[hover]]: !disabled
        }
      )}
      href={disabled ? undefined : href}
      {...rest}>
      {!!prefix && <span className={styles.prefix[size]}>{prefix}</span>}
      {children}
      {!!suffix && <span className={styles.suffix[size]}>{suffix}</span>}
    </Box>
  )
}
