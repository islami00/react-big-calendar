import type * as React from 'react'
import type { TimeGridProps } from 'react-big-calendar'
import type {
  DaylayoutAlgorithmOptions,
  HandleViewNavigateFn,
  PopupOffsetOptions,
  PropTypeFunc,
  RBCEvent,
  RBCResource,
} from './misc.types'
import type { CalendarComponentsWithDefaults } from './Calendar.types'
import type { DateLocalizer } from './localizer.types'
import type { CalendarViewComponentProps } from './components.types'

export interface TimeGridAllDayState {
  gutterWidth: number | undefined
  overlay: {
    date: Date
    events: RBCEvent[]
    position: {
      top: number
      left: number
      height: number
      width: string
    }
    target: HTMLElement
  } | null
  isOverflowing: boolean | null
}

type CommonProps<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource[]
> = Pick<
  TimeGridProps<TEvent, TResource>,
  | 'accessors'
  | 'resources'
  | 'min'
  | 'max'
  | 'getNow'
  | 'scrollToTime'
  | 'showMultiDayTimes'
  | 'rtl'
  | 'width'
  | 'selected'
  | 'selectable'
  | 'longPressThreshold'
  | 'onSelectSlot'
  | 'onSelectEnd'
  | 'onSelectStart'
  | 'onSelectEvent'
  | 'onDoubleClickEvent'
  | 'onKeyPressEvent'
>
export interface TimeGridAllDayProps<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> extends CommonProps<TEvent, TResource>,
    CalendarViewComponentProps {
  events: TEvent[]
  backgroundEvents: TEvent[]
  resources?: TResource[]

  range?: Date[]

  enableAutoScroll?: boolean

  resizable?: boolean

  accessors: object
  getters: object
  localizer: DateLocalizer

  allDayMaxRows?: number

  onNavigate?: HandleViewNavigateFn
  onShowMore?: PropTypeFunc

  dayLayoutAlgorithm?: DaylayoutAlgorithmOptions
  showAllEvents?: boolean
  doShowMoreDrillDown?: boolean

  popup?: boolean
  handleDragStart?: PropTypeFunc

  popupOffset?: PopupOffsetOptions

  components: CalendarComponentsWithDefaults<TEvent, TResource>
}

declare class TimeGridAllDay<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> extends React.Component<
  TimeGridAllDayProps<TEvent, TResource>,
  TimeGridAllDayState
> {}

export default TimeGridAllDay
