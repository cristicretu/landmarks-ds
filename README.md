# Design System guidelines

- All components are based on <Box /> component and extend the `Atoms` interface
- All components can be customized by passing:
  - `style` prop
  - `className` prop that will be added to the container <Box />
  - in the future have a `classes` prop that allow for more granular customization like https://material-ui.com/api/step-connector/#props

When building components, make sure you style first using atomic css from the <Box /> component. If that is not enough, use custom css from components `styles.css.ts`. As a last resort, or for dynamic css, use `style` prop