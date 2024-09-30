import type * as React from 'react'
import type { DateLocalizer } from './localizer.types'
import type {
  SelectActions,
  SelectClickPoint,
  SelectRect,
} from './Selection.types'

export interface OnSelectSlotArgs {
  start: number
  end: number
  action: SelectActions
  bounds?: SelectRect
  box?: SelectClickPoint
  // Same resource passed in
  resourceId?: any
}

export interface BackgroundCellsProps {
  date?: Date
  getNow: (...args: any[]) => any

  getters: object
  components: object

  container?: (...args: any[]) => any
  dayPropGetter?: (...args: any[]) => any
  selectable?: SelectableOptions
  longPressThreshold?: number

  onSelectSlot?: (args: OnSelectSlotArgs) => any
  onSelectEnd?: (...args: any[]) => any
  onSelectStart?: (...args: any[]) => any

  range: Date[]
  rtl?: boolean
  type?: string
  // Same resource passed in
  resourceId: any

  localizer: DateLocalizer
}

export interface BackgroundCellsState {
  selecting: boolean
  startIdx?: boolean
  endIdx?: boolean
}
export declare class BackgroundCells extends React.Component<
  BackgroundCellsProps,
  BackgroundCellsState
> {}
export type SelectableOptions = true | false | 'ignoreEvents'
