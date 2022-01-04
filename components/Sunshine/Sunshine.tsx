import { Box } from '../Box'
import { IUIComponent } from '../../utils/types'
import { Tooltip } from '../Tooltip'

interface IProps extends IUIComponent {
  children?: any
  orientation?: number
  tooltip?: string
  [key: string]: any
}

/*
    This function will return the position of the Sun, based on the degrees given
    Check the drawing above for reference.

    Full range:
    (0-20) => 0
    (20-40) => 1
    (40-50) => 2 (diagonal)
    (50-70) => 3
    (70-90) => 4
    (90-110) => 5
    (110-130) => 6
    (130-140) => 7 (diagonal)
    (140-160) => 8
    (160-180) => 9
    (180-200) => 10
    (200-220) => 11
    (220-230) => 12 (diagonal)
    (230-250) => 13
    (250-270) => 14
    (270-290) => 15
    (290-310) => 16
    (310-320) => 17 (diagonal)
    (320-340) => 18
    (340-359) => 19

*/
const findPos = (orientation: number): keyof typeof quadrantToCssPosition => {
  return Math.floor((20 / 360) * orientation) as any
}

const quadrantToCssPosition = {
  0: {
    top: '100%',
    transform: 'translateY(-100%)',
    left: '40%'
  },
  1: {
    top: '100%',
    transform: 'translateY(-100%)',
    left: '20%'
  },
  2: {
    top: '100%',
    transform: 'translateY(-100%)',
    left: '0%'
  },
  3: {
    top: '80%',
    transform: 'translateY(-100%)',
    left: '0%'
  },
  4: {
    top: '60%',
    transform: 'translateY(-100%)',
    left: '0%'
  },
  5: {
    top: '40%',
    transform: 'translateY(-100%)',
    left: '0%'
  },
  6: {
    top: '20%',
    transform: 'translateY(-100%)',
    left: '0%'
  },
  7: {
    top: '0%',
    left: '0%'
  },
  8: {
    top: '0%',
    left: '20%',
    transform: 'translateX(-100%)'
  },
  9: {
    top: '0%',
    left: '40%',
    transform: 'translateX(-100%)'
  },
  10: {
    top: '0%',
    left: '60%',
    transform: 'translateX(-100%)'
  },
  11: {
    top: '0%',
    left: '80%',
    transform: 'translateX(-100%)'
  },
  12: {
    top: '0%',
    left: '100%',
    transform: 'translateX(-100%)'
  },
  13: {
    left: '100%',
    top: '20%',
    transform: 'translateX(-100%) translateY(-100%)'
  },
  14: {
    left: '100%',
    transform: 'translateX(-100%) translateY(-100%)',
    top: '40%'
  },
  15: {
    left: '100%',
    transform: 'translateX(-100%) translateY(-100%)',
    top: '60%'
  },
  16: {
    left: '100%',
    transform: 'translateX(-100%) translateY(-100%)',
    top: '80%'
  },
  17: {
    left: '100%',
    top: '100%',
    transform: 'translateX(-100%) translateY(-100%)'
  },
  18: {
    top: '100%',
    transform: 'translateX(-100%) translateY(-100%)',
    left: '80%'
  },
  19: {
    top: '100%',
    transform: 'translateX(-100%) translateY(-100%)',
    left: '60%'
  }
}

export function Sunshine({
  children,
  orientation = 0,
  tooltip = 'Sun position at noon',
  ...rest
}: IProps) {
  return (
    <Box style={{ width: '100%', height: '100%' }}>
      {!!children && (
        <Box position="absolute" zIndex={3}>
          {children}
        </Box>
      )}
      <Box
        position="relative"
        style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(${orientation}deg, rgba(237,206,126, 0.5) 0%, rgba(237,206,126, 0) 30%)`
        }}
        {...rest}
      >
        <Tooltip content={tooltip} sideOffset={-5}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            style={{
              position: 'absolute',
              ...quadrantToCssPosition[findPos(orientation)]
            }}
          >
            <g transform="translate(-1571 -941)">
              <rect
                width="70"
                height="70"
                transform="translate(1571 941)"
                fill="none"
              />
              <g transform="translate(1074 206.182)">
                <g transform="translate(508.318 746.318)">
                  <circle
                    cx="11"
                    cy="11"
                    r="11"
                    transform="translate(12.682 12.682)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M9.688-3.5A13.188,13.188,0,1,1-3.5,9.688,13.2,13.2,0,0,1,9.688-3.5Zm0,21.517A8.329,8.329,0,1,0,1.359,9.688,8.339,8.339,0,0,0,9.688,18.017Z"
                    transform="translate(14.188 14.188)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M-1.071,5.523A2.429,2.429,0,0,1-3.5,3.094V-1.071A2.429,2.429,0,0,1-1.071-3.5,2.429,2.429,0,0,1,1.359-1.071V3.094A2.429,2.429,0,0,1-1.071,5.523Z"
                    transform="translate(24.599 1)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M-1.071,4.829A2.429,2.429,0,0,1-3.5,2.4v-3.47A2.429,2.429,0,0,1-1.071-3.5,2.429,2.429,0,0,1,1.359-1.071V2.4A2.429,2.429,0,0,1-1.071,4.829Z"
                    transform="translate(24.599 44.034)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M1.967,4.4A2.422,2.422,0,0,1,.249,3.685L-2.788.647a2.429,2.429,0,0,1,0-3.436,2.429,2.429,0,0,1,3.436,0L3.685.249A2.429,2.429,0,0,1,1.967,4.4Z"
                    transform="translate(7.888 7.888)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M1.967,4.4A2.422,2.422,0,0,1,.249,3.685L-2.788.647a2.429,2.429,0,0,1,0-3.436,2.429,2.429,0,0,1,3.436,0L3.685.249A2.429,2.429,0,0,1,1.967,4.4Z"
                    transform="translate(38.136 38.136)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M3.094,1.359H-1.071A2.429,2.429,0,0,1-3.5-1.071,2.429,2.429,0,0,1-1.071-3.5H3.094A2.429,2.429,0,0,1,5.523-1.071,2.429,2.429,0,0,1,3.094,1.359Z"
                    transform="translate(1 24.599)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M2.4,1.359h-3.47A2.429,2.429,0,0,1-3.5-1.071,2.429,2.429,0,0,1-1.071-3.5H2.4A2.429,2.429,0,0,1,4.829-1.071,2.429,2.429,0,0,1,2.4,1.359Z"
                    transform="translate(44.034 24.599)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M-1.071,4.4a2.422,2.422,0,0,1-1.718-.712,2.429,2.429,0,0,1,0-3.436L.249-2.788a2.429,2.429,0,0,1,3.436,0,2.429,2.429,0,0,1,0,3.436L.647,3.685A2.422,2.422,0,0,1-1.071,4.4Z"
                    transform="translate(7.888 38.136)"
                    fill="#fff5cb"
                  />
                  <path
                    d="M-1.071,4.4a2.422,2.422,0,0,1-1.718-.712,2.429,2.429,0,0,1,0-3.436L.249-2.788a2.429,2.429,0,0,1,3.436,0,2.429,2.429,0,0,1,0,3.436L.647,3.685A2.422,2.422,0,0,1-1.071,4.4Z"
                    transform="translate(38.136 7.888)"
                    fill="#fff5cb"
                  />
                </g>
                <path
                  d="M9.207-15.838A9.294,9.294,0,0,0,5.625-16.6c-2.134,0-4.191,1.124-4.191,3.544,0,2.039,1.581,2.953,3.315,3.563,1.3.457,2.5.9,2.5,2.477A1.911,1.911,0,0,1,5.11-4.94a3.432,3.432,0,0,1-2.02-.648,10.882,10.882,0,0,1-.286-2.324L1.281-8.084A19.329,19.329,0,0,1,.9-4.559a9.466,9.466,0,0,0,3.887.838c2.991,0,4.839-1.372,4.839-4,0-2.191-1.943-3.029-3.658-3.7-1.315-.514-2.21-1.105-2.21-2.381a1.663,1.663,0,0,1,1.791-1.677,2.978,2.978,0,0,1,1.619.457,7.17,7.17,0,0,1,.324,1.962l1.029.152h.553v-.553C9.073-14.314,9.149-15.285,9.207-15.838Z"
                  transform="translate(526.362 780.01)"
                  fill="#edc749"
                />
              </g>
            </g>
          </svg>
        </Tooltip>
      </Box>
    </Box>
  )
}
