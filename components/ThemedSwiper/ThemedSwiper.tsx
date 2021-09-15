import { Children } from 'react'
import SwiperCore, { Virtual, Navigation, Pagination, Keyboard, Autoplay, EffectFade, SwiperOptions } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import * as styles from './styles.css'

SwiperCore.use([Virtual, Navigation, Pagination, Autoplay, EffectFade])

interface IProps {
  children: Array<React.ReactElement>
  virtual?: boolean
  navigation?: boolean
  keyboard?: boolean
  autoplay?: boolean
  loop?: boolean
  effect?: SwiperOptions['effect']
}

export function ThemedSwiper({ children, virtual = true, navigation = false, keyboard = false, autoplay = false, loop = false, effect }: IProps) {
  return (
    <Swiper
      virtual={virtual}
      navigation={navigation}
      keyboard={keyboard}
      autoplay={autoplay}
      loop={loop}
      effect={effect}
      className={styles.themedSwiper}>
      {Children.map(children, (child) => (
        <SwiperSlide>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}