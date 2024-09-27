import type {
  DateRangeList,
  GetSlotMetricsReturns,
} from '../../../../src/utils/DateSlotMetrics.types'
import type { DateLocalizer, NavigateAction } from 'react-big-calendar'
import type { subtract } from 'date-arithmetic'
import * as TimeSlotUtils from '../../../../src/utils/TimeSlots'

declare module 'react-big-calendar' {
  export interface DateLocalizer {
  }

  interface TimeSlotWrapperProps<TResource extends object = object> {
    children: React.ReactNode
    value: Date
    resource: null | TResource
  }
  interface DayColumnWrapperProps {
    children: React.ReactNode[]
    className?: string
    date: Date
    slotMetrics: ReturnType<typeof TimeSlotUtils.getSlotMetrics>
    style?: React.CSSProperties
    onNavigate: (action: NavigateAction, newDate?: Date) => void
  }
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
