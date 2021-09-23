import { Children } from 'react'
import SwiperCore, { Virtual, Navigation, Pagination, Keyboard, Autoplay, EffectFade, SwiperOptions, HashNavigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as styles from './styles.css'

SwiperCore.use([Virtual, Navigation, Pagination, Autoplay, EffectFade, HashNavigation])

interface IProps {
  children: Array<React.ReactElement>
  virtual?: boolean
  navigation?: boolean
  keyboard?: boolean
  autoplay?: boolean
  loop?: boolean
  hashNavigation?: boolean
  hashPrefix?: string
  effect?: SwiperOptions['effect']
}

export function ThemedSwiper({ children, virtual = true, navigation = false, keyboard = false, autoplay = false, loop = false, hashNavigation, hashPrefix = 'slide', effect }: IProps) {
  return (
    <Swiper
      virtual={virtual}
      navigation={navigation}
      keyboard={keyboard}
      autoplay={autoplay}
      loop={loop}
      effect={effect}
      hashNavigation={hashNavigation && { replaceState: true }}
      className={styles.themedSwiper}>
      {Children.map(children, (child, i) => (
        <SwiperSlide {...hashNavigation && { 'data-hash': `${hashPrefix}-${i}`}}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}