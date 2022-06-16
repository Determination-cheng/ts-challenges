type MyReadonly<T extends Record<keyof any, any>> = {
  readonly [K in keyof T]: T[K]
}
