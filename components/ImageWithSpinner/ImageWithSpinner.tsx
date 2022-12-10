import { useState, useCallback, ReactElement } from 'react'
import Image, { ImageProps } from "next/legacy/image";
import noop from 'lodash/noop'

import { Box } from '../Box'
import * as styles from './styles.css'

interface IProps extends ImageProps {
  children: ReactElement
  [key: string]: any
}

declare type OnLoadingComplete = (result: { naturalWidth: number; naturalHeight: number }) => void

export function ImageWithSpinner({ children, onLoadingComplete = noop, ...imageProps }: IProps) {
  const [loaded, setLoaded] = useState(false)
  const handleLoadingComplete: OnLoadingComplete = useCallback(
    (result) => {
      onLoadingComplete(result)
      setLoaded(true)
    },
    [loaded]
  )

  return (
    <>
      {!loaded && (
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={2}
          className={styles.loading}>
          {children}
        </Box>
      )}
      <Image
        alt="test"
        unselectable="off"
        onLoadingComplete={handleLoadingComplete}
        {...imageProps}
      />
    </>
  )
}
