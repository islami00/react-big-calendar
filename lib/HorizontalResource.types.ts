import type { RBCEvent, RBCResource } from './misc.types'
import type {
  RBCWeekProps,
  WeekNavigateFn,
  WeekRangeFn,
  WeekTitleFn,
} from './Week.types'

export interface HorizontalResourceProps<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> extends RBCWeekProps<TEvent, TResource> {}

export interface HorizontalResourceViewStatic {
  range: WeekRangeFn
  navigate: WeekNavigateFn
  title: WeekTitleFn
}

export type HorizontalResource<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> = ((props: HorizontalResourceProps<TEvent, TResource>) => React.ReactNode) &
  HorizontalResourceViewStatic
