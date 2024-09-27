import React, { useState, useEffect, useCallback, useMemo } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

import { getSlotMetrics } from './utils/TimeSlots'

/**
 * Since the TimeGutter only displays the 'times' of slots in a day, and is separate
 * from the Day Columns themselves, we check to see if the range contains an offset difference
 * and, if so, change the beginning and end 'date' by a day to properly display the slots times
 * used.
 */
function adjustForDST({ min, max, localizer }) {
  if (localizer.getTimezoneOffset(min) !== localizer.getTimezoneOffset(max)) {
    return {
      start: localizer.add(min, -1, 'day'),
      end: localizer.add(max, -1, 'day'),
    }
  }
  return { start: min, end: max }
}

const TimeGutterAllDay = ({
  min,
  max,
  timeslots,
  step,
  localizer,
  getNow,
  resources,
  components,
  getters,
  gutterRef,
  accessors,
}) => {
  const { timeGutterWrapper: TimeGutterWrapper } = components
  const { start, end } = useMemo(
    () => adjustForDST({ min, max, localizer }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [min?.toISOString(), max?.toISOString(), localizer]
  )
  const [slotMetrics, setSlotMetrics] = useState(
    getSlotMetrics({
      min: start,
      max: end,
      timeslots,
      step,
      localizer,
    })
  )

  useEffect(() => {
    if (slotMetrics) {
      setSlotMetrics(
        slotMetrics.update({
          min: start,
          max: end,
          timeslots,
          step,
          localizer,
        })
      )
    }
    /**
     * We don't want this to fire when slotMetrics is updated as it would recursively bomb
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start?.toISOString(), end?.toISOString(), timeslots, step])

  const renderSlot = useCallback(
    (resource, idx) => {
      const isNow = slotMetrics.dateIsInGroup(getNow(), idx)
      return (
        <span className={clsx('rbc-label', isNow && 'rbc-now')}>
          {accessors.resourceTitle(resource) || 'Hello'}
        </span>
      )
    },
    [slotMetrics, localizer, getNow]
  )

  return (
    <TimeGutterWrapper slotMetrics={slotMetrics}>
      <div className="rbc-time-gutter rbc-time-column" ref={gutterRef}>
        {resources.map((resource, idx) => {
          const slotProps = getters ? getters.slotProp(resource) : {}
          return (
            <div className={clsx('brbc-time-slot', slotProps.className)}>
              {renderSlot(resource, idx)}
            </div>
          )
        })}
      </div>
    </TimeGutterWrapper>
  )
}

TimeGutterAllDay.propTypes = {
  min: PropTypes.instanceOf(Date).isRequired,
  max: PropTypes.instanceOf(Date).isRequired,
  timeslots: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  getNow: PropTypes.func.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object,

  localizer: PropTypes.object.isRequired,
  resource: PropTypes.string,
  gutterRef: PropTypes.any,
}

export default React.forwardRef((props, ref) => (
  <TimeGutterAllDay gutterRef={ref} {...props} />
))
