import type * as React from 'react'
import type * as rbc from 'react-big-calendar'
import type { RBCEvent, RBCResource, WithRequired } from './misc.types'
import type { TimeSlotWrapperProps } from './components.types'
import type { TimeGutterAllDaySlotProps } from './TimeGutterAllDaySlot.types'

export interface CalendarComponents<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> extends rbc.Components<TEvent, TResource> {
  timeSlotWrapper?: React.ComponentType<TimeSlotWrapperProps> | undefined
  timeGutterAllDaySlot?: React.ComponentType<TimeGutterAllDaySlotProps>
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

interface CalendarProps<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> extends rbc.CalendarProps<TEvent, TResource> {
  components?: CalendarComponents<TEvent, TResource> | undefined
}

export declare class Calendar extends React.Component<CalendarProps> {}
