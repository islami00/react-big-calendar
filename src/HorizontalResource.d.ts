import type {
  HorizontalResource,
  HorizontalResourceProps,
  HorizontalResourceViewStatic,
} from './HorizontalResource.types'

declare module 'react-big-calendar/lib/HorizontalResource' {
  export type { HorizontalResourceProps, HorizontalResourceViewStatic }
  export default HorizontalResource
}
