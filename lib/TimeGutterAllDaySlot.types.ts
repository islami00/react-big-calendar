import type { RBCResource } from './misc.types'

/** This was created instead of using TimeSlotWrapper as TimeSlotWrapper is already used for something else  */
export interface TimeGutterAllDaySlotProps<
  TResource extends object = RBCResource
> {
  resource: null | TResource
  accessors: object
  ref?: React.Ref<HTMLElement>
}
