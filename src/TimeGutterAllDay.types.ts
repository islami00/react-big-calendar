import type { DateLocalizer } from './localizer'
import type { ResourcesFnReturns } from './utils/Resources.types'

export interface TimeGutterAllDayProps {
  localizer: DateLocalizer
  getNow: () => number
  resources: ResourcesFnReturns
  components: object
  getters?: object
  gutterRef?: any
  accessors: object
}

export type TimeGutterAllDayComponent = React.FC<TimeGutterAllDayProps>
export type TimeGutterAllDayForwardedComponent =
  React.ForwardRefExoticComponent<TimeGutterAllDayProps>
