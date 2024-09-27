import type { TimeGridProps as TypesTimeGridProps } from 'react-big-calendar'

// Based on react-big-calendar @types
// Added props I need

export type TimeGridProps<
  TEvent extends object = Event,
  TResource extends object = object
> = TypesTimeGridProps<TEvent, TResource>
