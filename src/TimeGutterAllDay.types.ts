import type { CalendarComponentsWithDefaults } from './Calendar.types'
import type { RBCEvent, RBCResource } from './misc.types'
import type { ResourcesFnReturns } from './utils/Resources.types'

export interface TimeGutterAllDayProps<
  TEvent extends object = RBCEvent,
  TResource extends object = RBCResource
> {
  resources: ResourcesFnReturns
  components: CalendarComponentsWithDefaults<TEvent, TResource>
  getters?: object
  accessors: object
}
