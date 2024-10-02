import type * as React from 'react'
import type * as rbc from 'react-big-calendar'
import type { RBCEvent, RBCResource, WithRequired } from './misc.types'
import type {
  CalendarViewComponentProps,
  DefaultViews,
  TimeSlotWrapperProps,
  ViewComponent,
  ViewRegistery,
  ViewRegisteryKey,
} from './components.types'
import type { TimeGutterAllDaySlotProps } from './TimeGutterAllDaySlot.types'

type SharedCalendarComponents<
  TEvent extends object,
  TResource extends object
> = Omit<rbc.Components<TEvent, TResource>, 'timeSlotWrapper'>
export interface CalendarComponents<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> extends SharedCalendarComponents<TEvent, TResource> {
  timeSlotWrapper?:
    | React.ComponentType<TimeSlotWrapperProps<TResource>>
    | undefined
  timeGutterAllDaySlot?: React.ComponentType<
    TimeGutterAllDaySlotProps<TResource>
  >
  backgroundEventWrapper?: React.ComponentType
  weekWrapper?: React.ComponentType
}

export type CalendarComponentsWithDefaults<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> = WithRequired<
  CalendarComponents<TEvent, TResource>,
  | 'eventWrapper'
  | 'backgroundEventWrapper'
  | 'eventContainerWrapper'
  | 'dateCellWrapper'
  | 'weekWrapper'
  | 'timeSlotWrapper'
  | 'timeGutterWrapper'
>

type SharedCalendarProps<
  TEvent extends object,
  TResource extends object
> = Omit<
  rbc.CalendarProps<TEvent, TResource>,
  | 'components'
  | 'views'
  | 'view'
  | 'onNavigate'
  | 'onView'
  | 'drilldownView'
  | 'defaultView'
>

export interface RBCCalendarProps<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> extends SharedCalendarProps<TEvent, TResource>,
    CalendarViewComponentProps {
  components?: SharedCalendarProps<TEvent, TResource> | undefined
  views?: Partial<ViewRegistery> | (keyof DefaultViews)[]
  view: ViewRegisteryKey

  onNavigate?:
    | ((
        newDate: Date,
        view: ViewRegisteryKey,
        action: rbc.NavigateAction
      ) => void)
    | undefined
  onView?: ((view: ViewRegisteryKey) => void) | undefined
  drilldownView?: ViewRegisteryKey | null | undefined
  defaultView?: ViewRegisteryKey | undefined
}

declare class Calendar extends React.Component<RBCCalendarProps> {
  getViews: () => Record<string, ViewComponent>
  getView: () => ViewComponent
  getDrilldownView: (date: Date) => rbc.View | null
}
export default Calendar
