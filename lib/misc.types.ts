import type { NavigateAction } from 'react-big-calendar'
import type { DateLocalizer } from './localizer.types'
import type * as React from 'react'
export type PropTypeFunc = (...args: any[]) => void

export type DateRangeList = [Date, ...Date[]]

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

interface PropsWithLocalizer {
  localizer: DateLocalizer
}
export type ViewRangeFn = (
  date: Date,
  props: PropsWithLocalizer
) => DateRangeList

interface NavigateProps {
  localizer: DateLocalizer
}

export type ViewNavigate = (
  date: Date,
  action: NavigateAction,
  props: NavigateProps
) => Date
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export interface ForwardRefFunction {
  <T, P = {}>(
    render: (props: P, ref: React.ForwardedRef<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}
