import type { ViewStatic } from 'react-big-calendar'
import type { DateLocalizer } from './localizer.types'
import type { RBCResource } from './misc.types'
export interface TimeSlotWrapperProps<TResource extends object = RBCResource> {
  children: React.ReactNode
  value: Date
  resource: null | TResource
}

export interface CalendarViewComponentProps {
  onDrillDown?: ((date: Date, view: ViewRegisteryKey) => void) | undefined
  getDrilldownView?:
    | ((
        targetDate: Date,
        currentViewName: ViewRegisteryKey,
        configuredViewNames: ViewRegisteryKey[]
      ) => void)
    | null
    | undefined
}
export interface DefaultViews {
  month: ViewComponent
  week: ViewComponent
  work_week: ViewComponent
  day: ViewComponent
  agenda: ViewComponent
}
type DefaultViewsOptionalBoolean = {
  [K in keyof DefaultViews]?: true | DefaultViews[K]
}
export interface ViewRegistery extends DefaultViewsOptionalBoolean {}
export type ViewRegisteryKey = keyof ViewRegistery // Allow custom values views via decl merging

export interface ViewComponentStaticRangeArgs {
  localizer: DateLocalizer
}

export interface ViewComponentStatic extends ViewStatic {
  // Fixed props because it's called in the calendar for all like this
  range(date: Date, { localizer }: ViewComponentStaticRangeArgs): Date[]
}

export interface ViewFunctionalComponent
  extends ViewComponentStatic,
    React.FunctionComponent<CalendarViewComponentProps> {}

export interface ViewClassComponent
  extends ViewComponentStatic,
    React.ComponentClass<CalendarViewComponentProps> {}

export type ViewComponent = ViewFunctionalComponent | ViewClassComponent
