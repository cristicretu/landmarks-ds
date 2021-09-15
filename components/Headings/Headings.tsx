import { ReactNode } from "react"
import { Box } from "../Box"
import { Atoms } from 'site/styles/sprinkles.css'

interface HeadingProps extends Atoms {
  children: ReactNode
  className?: string
  style?: any
}

export function H1({ children, ...rest }: HeadingProps) {
  return (
    <Box
      component="h1"
      fontSize={{
        mobile: '5x',
        laptop: '6x',
      }}
      textTransform="uppercase"
      {...rest}>
      {children}
    </Box>
  )
}

export function H2({ children, ...rest }: HeadingProps) {
  return (
    <Box
      component="h2"
      fontSize={{
        mobile: '4x',
        laptop: '5x',
      }}
      textTransform="uppercase"
      {...rest}>
      {children}
    </Box>
  )
}

export function H3({ children, ...rest }: HeadingProps) {
  return (
    <Box
      component="h3"
      fontSize={{
        mobile: '3x',
        laptop: '4x',
      }}
      {...rest}>
      {children}
    </Box>
  )
}

export function H4({ children, ...rest }: HeadingProps) {
  return (
    <Box
      component="h4"
      fontSize={{
        mobile: '2x',
        laptop: '3x',
      }}
      {...rest}>
      {children}
    </Box>
  )
}

export function H5({ children, ...rest }: HeadingProps) {
  return (
    <Box
      component="h5"
      fontSize={{
        mobile: '1x',
        laptop: '2x',
      }}
      {...rest}>
      {children}
    </Box>
  )
}

export function H6({ children, ...rest }: HeadingProps) {
  return (
    <Box
      component="h6"
      fontSize={{
        mobile: '1x',
      }}
      {...rest}>
      {children}
    </Box>
  )
}