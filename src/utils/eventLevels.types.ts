import type { DateLocalizer, Event } from 'react-big-calendar'
import type {
  DateRangeList,
  GetSlotMetricsArgsAccessors,
} from './DateSlotMetrics.types'
import type { RowSegment, EventLevelsList } from './common'

export interface EventLevelsReturns<TEvent = Event> {
  levels: EventLevelsList<TEvent>
  extra: RowSegment<TEvent>[]
}
export type EventLevelsFn = (
  rowSegments: RowSegment[],
  limit?: number
) => EventLevelsReturns

export type EventSegmentsFn = <TEvent = Event>(
  event: TEvent,
  range: DateRangeList,
  accessors: GetSlotMetricsArgsAccessors<TEvent>,
  localizer: DateLocalizer
) => RowSegment<TEvent>
