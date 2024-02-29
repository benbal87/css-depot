import { Type } from '@angular/core'
import {
  GeneralDesignComponent
} from '../components/design-components/general-design/general-design.component'

export type NonEmptyArray<T> = [T, ...T[]]

export type Display = {
  component: Type<GeneralDesignComponent>,
  template: string
  style: string
}
