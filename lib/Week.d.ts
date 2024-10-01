import type {
  Week,
  RBCWeekProps,
  WeekNavigateFn,
  WeekRangeFn,
  WeekTitleFn,
} from './Week.types'

declare module 'react-big-calendar/lib/Week' {
  export type { RBCWeekProps, WeekNavigateFn, WeekRangeFn, WeekTitleFn }
  export default Week
}
