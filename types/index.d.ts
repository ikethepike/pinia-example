import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    extensions: string
  }
}
