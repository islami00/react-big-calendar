import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'

/** @type {import("./TimeGutterAllDay.types").TimeGutterAllDayComponent}  */
const TimeGutterAllDay = ({
  localizer,
  getNow,
  resources,
  components,
  getters,
  gutterRef,
  accessors,
}) => {
  const { timeGutterWrapper: TimeGutterWrapper } = components

  const renderSlot = useCallback(
    (resource) => {
      return (
        <span className={clsx('rbc-label')}>
          {accessors.resourceTitle(resource)}
        </span>
      )
    },
    [localizer, getNow]
  )

  return (
    <TimeGutterWrapper>
      <div className="brbc-time-gutter" ref={gutterRef}>
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
              {renderSlot(resource)}
            </div>
          )
        })}
      </div>
    </TimeGutterWrapper>
  )
}
TimeGutterAllDay.propTypes = {
  getNow: PropTypes.func.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object,

  localizer: PropTypes.object.isRequired,
  resources: PropTypes.object.isRequired,
  gutterRef: PropTypes.any,
  accessors: PropTypes.object.isRequired,
}
/** @type {import("./TimeGutterAllDay.types").TimeGutterAllDayFWComponent}  */
export default React.forwardRef((props, ref) => (
  <TimeGutterAllDay gutterRef={ref} {...props} />
))
