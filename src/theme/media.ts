const screenConfig = {
  small: 600,
  large: 1135,
}

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`

export const media = {
  large: customMediaQuery(screenConfig.large),
  small: customMediaQuery(screenConfig.small),
}
