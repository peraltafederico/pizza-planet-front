import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: string
      lightGreen: string
      white: string
      black: string
      blue: string
      red: string
    }
    fonts: {
      title: string
      text: string
    }
  }
}
