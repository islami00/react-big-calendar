import { Event } from 'react-big-calendar'

export interface RowSegment<TEvent = Event> {
  event: TEvent
  span: number
  left: number
  right: number
}
export type EventLevelsList<TEvent> = RowSegment<TEvent>[][]
