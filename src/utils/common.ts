import type * as React from 'react'
export interface RowSegment<TEvent = RBCEvent> {
  event: TEvent
  span: number
  left: number
  right: number
}
export type EventLevelsList<TEvent = RBCEvent> = RowSegment<TEvent>[][]

/** Alternatively, resourceIdAccessor and resourceTitleAccessor can be used instead */
export interface RBCResource {
  id: string | number // must be unique
  title: string
}

export interface RBCEvent {
  allDay?: boolean | undefined
  title?: React.ReactNode | undefined
  start?: Date | undefined
  end?: Date | undefined
  resourceId?: string | number
}
