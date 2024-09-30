/** @import * as types from './TimeGutterAllDay.types*/
/** @import {RBCEvent, RBCResource} from './misc.types*/
import * as React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import TimeGutterAllDaySlot from './TimeGutterAllDaySlot'
import { forwardRefWithGenerics } from './misc'

/**
 * @template {NonNullable<unknown>} TEvent
 * @template {NonNullable<unknown>} TResource
 * @param {types.TimeGutterAllDayProps<TEvent, TResource>} props
 * @param {React.Ref<any>} ref Gutter Ref
 */
const TimeGutterAllDay = (props, ref) => {
  const { resources, components, getters, accessors } = props
  const { timeGutterWrapper: TimeGutterWrapper } = components

  const TimeGutterAllDaySlotComponent =
    components.timeGutterAllDaySlot || TimeGutterAllDaySlot
  return (
    <TimeGutterWrapper resources={resources}>
      <div className="brbc-time-gutter" ref={ref}>
        {resources.map(([resourceId, resource], idx, arrayLen) => {
          const slotProps = getters ? getters.slotProp(resource) : {}
          const isLast = idx === arrayLen - 1
          return (
            <div
              key={resourceId.toString()}
              className={clsx(
                'brbc-resource-row',
                slotProps.className,
                isLast && 'brbc-last'
              )}
            >
              <TimeGutterAllDaySlotComponent
                resource={resource}
                accessors={accessors}
              />
            </div>
          )
        })}
      </div>
    </TimeGutterWrapper>
  )
}
TimeGutterAllDay.propTypes = {
  components: PropTypes.object.isRequired,
  getters: PropTypes.object,

  resources: PropTypes.object.isRequired,
  accessors: PropTypes.object.isRequired,
}
export default forwardRefWithGenerics(TimeGutterAllDay)
