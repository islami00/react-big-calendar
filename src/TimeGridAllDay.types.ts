import type * as React from 'react'
import type { TimeGridProps } from 'react-big-calendar'
import type { RBCEvent, RBCResource } from './misc.types'

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

export declare class TimeGridAllDay<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> extends React.Component<
  TimeGridProps<TEvent, TResource>,
  TimeGridAllDayState
> {}
