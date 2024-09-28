import type * as React from 'react'
import type {
  OnSelectSlotArgs,
  SelectableOptions,
} from './BackgroundCells.types'
import type { RBCEvent, PropTypeFunc } from './misc.types'

export interface DateContentRowProps {
  date?: Date
  events: RBCEvent[]
  range: Date[]

  rtl?: boolean
  resizable?: boolean
  resourceId: any
  renderForMeasure?: boolean
  renderHeader: PropTypeFunc

  container?: PropTypeFunc
  selected?: object
  selectable?: SelectableOptions
  longPressThreshold?: number

  onShowMore: PropTypeFunc
  showAllEvents?: boolean
  onSelectSlot: (range: Date[], slot: OnSelectSlotArgs) => void
  onSelect?: PropTypeFunc
  onSelectEnd: PropTypeFunc
  onSelectStart: PropTypeFunc
  onDoubleClick?: PropTypeFunc
  onKeyPress?: PropTypeFunc
  dayPropGetter?: PropTypeFunc

  getNow: PropTypeFunc
  isAllDay: boolean

  accessors: object
  components: object
  getters: object
  localizer: object

  minRows: number
  maxRows: number
}
export declare class DateContentRow extends React.Component<DateContentRowProps> {}
