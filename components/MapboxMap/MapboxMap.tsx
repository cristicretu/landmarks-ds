import { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import cn from 'classnames'

import * as styles from './styles.css'
import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import { Atoms } from 'site/styles/sprinkles.css'

const mapContainer = 'mapbox-container'

// @ts-ignore
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

interface IProps extends Atoms, IUIComponent {
  location: [number, number],
  title: string
  subtitle: string
  googleMapsLink: string
  startZoom?: number
  endZoom?: number
}

export function MapboxMap({ location, title, subtitle, className, googleMapsLink, startZoom = 10, endZoom = 11, ...rest }: IProps) {
  const [mapInstance, setMapInstance] = useState<any>(null)
  const [initialView, setInitialView] = useState(true)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      interactive: false,
      // scrollZoom: false,
      // @ts-ignore
      center: location,
      zoom: startZoom,
    })
    const marker = new mapboxgl.Marker({
      color: '#ea4335',
      scale: 1.3,
    })
    // @ts-ignore
      .setLngLat(location)
      .addTo(map)

    const mainPopup = new mapboxgl.Popup({
      closeOnClick: false,
      closeButton: false,
      offset: {
        top: [0, 10]
      },
      focusAfterOpen: false,
      anchor: "top"
    })
      // @ts-ignore
      .setLngLat(location)
      .setHTML(`<div style="text-align:center; user-select: none;"><h1>${title}</h1><a rel="nofollow" href="${googleMapsLink}" target="_blank">${subtitle}</a></div>`)
      .addTo(map)

    setMapInstance(map)
  }, [])

  useEffect(() => {
    if (mapInstance && initialView) {
      mapInstance.flyTo({
        zoom: endZoom,
        center: location,
        speed: 0.3
      })
      setInitialView(false)
    }
  }, [initialView, mapInstance])

  return (
    // <div className={styles.container}>
      <Box
        id={mapContainer}
        className={cn(styles.container, className)}
        {...rest} />
    // </div>
  )
}