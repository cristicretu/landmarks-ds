import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Spinner } from "../Spinner"

import * as styles from './styles.css'

export function Loading() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url: string) => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading ? (
    <div className={styles.loading}>
      <Spinner />
    </div>
  ) : null
}