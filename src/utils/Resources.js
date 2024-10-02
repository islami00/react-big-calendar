/** @import * as types from './Resources.types*/
export const NONE = {}

/**
 * @type {types.ResourcesFn}
 */
export default function Resources(resources, accessors) {
  return {
    map(fn) {
      // REASON: This doesn't render anything in the time view when an empty list is passed to resources, even if events exist
      if (!resources || resources.length === 0) {
        return [fn([NONE, null], 0, 1)]
      }
      return resources.map((resource, idx, array) =>
        fn([accessors.resourceId(resource), resource], idx, array.length)
      )
    },

    groupEvents(events) {
      const eventsByResource = new Map()

      if (!resources) {
        // Return all events if resources are not provided
        eventsByResource.set(NONE, events)
        return eventsByResource
      }

      events.forEach((event) => {
        const id = accessors.resource(event) || NONE
        if (Array.isArray(id)) {
          id.forEach((item) => {
            let resourceEvents = eventsByResource.get(item) || []
            resourceEvents.push(event)
            eventsByResource.set(item, resourceEvents)
          })
        } else {
          let resourceEvents = eventsByResource.get(id) || []
          resourceEvents.push(event)
          eventsByResource.set(id, resourceEvents)
        }
      })
      return eventsByResource
    },
  }
}
