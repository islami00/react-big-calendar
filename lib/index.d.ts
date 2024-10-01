import type { TimeGridAllDay } from './TimeGridAllDay.types'
import type { HorizontalResource } from './HorizontalResource.types'
import type { Week } from './Week.types'

declare module 'react-big-calendar/lib/Week' {
  export default Week
}
declare module 'react-big-calendar/lib/TimeGridAllDay' {
  export default TimeGridAllDay
}
declare module 'react-big-calendar/lib/HorizontalResource' {
  export default HorizontalResource
}
