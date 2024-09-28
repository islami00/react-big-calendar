import type { DateLocalizer } from './localizer'
import type { ResourcesFnReturns } from './utils/Resources.types'

export interface TimeGutterAllDayProps {
  localizer: DateLocalizer
  getNow: () => number
  resources: ResourcesFnReturns
  components: object
  getters?: object
  gutterRef: any
  accessors: object
}

export type TimeGutterAllDayFWComponent = React.ForwardRefExoticComponent<
  Omit<TimeGutterAllDayProps, 'gutterRef'>
>
export type TimeGutterAllDayComponent =
  React.ForwardRefExoticComponent<TimeGutterAllDayProps>
