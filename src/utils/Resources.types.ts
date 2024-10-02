import type { RBCResource, RBCEvent } from '../misc.types'

export type ResourcesFnNoneObject = {}

export type ResourcesFnResourceId = string | number

/** `Resources` ensures this is never null or undefined */
export type ResourcesFnGroupKey = ResourcesFnNoneObject | ResourcesFnResourceId

export type ResourcesFnTuple = [ResourcesFnGroupKey, null | RBCResource]

export type ResourcesFnMapFn<T> = (
  resourceTuple: ResourcesFnTuple,
  idx: number,
  /** Array length. */
  arrayLen: number
) => T

export type ResourcesFnGroupedEvents = Map<ResourcesFnGroupKey, RBCEvent[]>

export interface ResourcesFnReturns {
  map: <T>(fn: ResourcesFnMapFn<T>) => T[]
  groupEvents: (events: RBCEvent[]) => ResourcesFnGroupedEvents
}
export type ResourcesFn = (
  resources: RBCResource[] | undefined,
  accessors: object
) => ResourcesFnReturns
