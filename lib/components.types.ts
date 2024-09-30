import type { RBCResource } from './misc.types'

export interface TimeSlotWrapperProps<TResource extends object = RBCResource> {
  children: React.ReactNode
  value: Date
  resource: null | TResource
}
