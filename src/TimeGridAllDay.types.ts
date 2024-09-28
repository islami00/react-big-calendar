import type { TimeGridProps as TypesTimeGridProps } from 'react-big-calendar'
import type {
  ResourcesFnGroupedEvents,
  ResourcesFnTuple,
} from './utils/Resources.types'

// Based on react-big-calendar @types
// Added props I need

export type TimeGridProps<
  TEvent extends object = Event,
  TResource extends object = object
> = TypesTimeGridProps<TEvent, TResource>

export interface TimeGridAllDayClass {
  renderEvents(
    groupedEvents: ResourcesFnGroupedEvents,
    resourceTuple: ResourcesFnTuple,
    idx: number,
    arrayLen: number
  ): React.JSX.Element
}
