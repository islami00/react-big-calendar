import type { DateLocalizer, Event } from 'react-big-calendar'

import type { RowSegment, EventLevelsList } from './common'

export type DateRangeList = [Date, ...Date[]]
export interface GetSlotMetricsReturns<TEvent extends Event = Event> {
  first: Date
  last: Date
  levels: EventLevelsList<TEvent>
  extra: RowSegment<TEvent>[]
  range: DateRangeList
  slots: number
  clone: (arg: GetSlotMetricsArgs<TEvent>) => GetSlotMetricsReturns<TEvent>
  getDateForSlot: (slotNumber: number) => Date
  getSlotForDate: (date: Date) => DateRangeList
  getEventsForSlot: (slot: number) => TEvent[]
  continuesPrior: (event: TEvent) => boolean
  continuesAfter: (event: TEvent) => boolean
}

export interface GetSlotMetricsArgsAccessors<TEvent extends Event = Event> {
  title?: ((event: TEvent) => string) | undefined
  tooltip?: ((event: TEvent) => string) | undefined
  end?: ((event: TEvent) => Date) | undefined
  start?: ((event: TEvent) => Date) | undefined
  allDay?: ((event: TEvent) => boolean) | undefined
}

interface GetSlotMetricsArgs<TEvent extends Event = Event> {
  range: DateRangeList
  events: TEvent[]
  maxRows: number
  minRows: number
  accessors: GetSlotMetricsArgsAccessors<TEvent>
  localizer: DateLocalizer
}

export type GetSlotMetrics = (
  options: GetSlotMetricsArgs
) => GetSlotMetricsReturns

export type IsSegmentInSlot = (seg: number, slot: number) => boolean
