import { NonEmptyArray } from '../types/app.types'

export const isArrayNotEmpty = (
  arg: any
): arg is NonEmptyArray<typeof arg> =>
  Array.isArray(arg) && arg?.length > 0

// export const setStaticTemplate = (
//   componentTemplate,
//   componentElementRef
// ) => {
//
// }
