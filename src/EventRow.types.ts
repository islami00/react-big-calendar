import * as React from 'react'
import type { RowSegment } from './utils/common'
import type { Event } from 'react-big-calendar'
import type { GetSlotMetricsReturns } from './utils/DateSlotMetrics.types'



export interface EventRowProps<TEvent = Event> {
  segments: RowSegment<TEvent>[]
  slotMetrics: GetSlotMetricsReturns<TEvent>
  className?: string
}

export class EventRow<TEvent = Event> extends React.Component<
  EventRowProps<TEvent>
> {}