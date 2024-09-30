import React, { Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'

import * as dates from 'date-arithmetic'
import { Calendar, Views, Navigate, DateLocalizer } from 'react-big-calendar'
import TimeGridAllDay from '../../../src/TimeGridAllDay' // use 'react-big-calendar/lib/TimeGridAllDay'. Can't 'alias' in Storybook
import Week from '../../../src/Week' // use 'react-big-calendar/lib/Week'. Can't 'alias' in Storybook
import resourceEvents from '../../resources/resourceEvents'
import DemoLink from '../../DemoLink.component'

function MyWeek({
  date,
  localizer,
  min = localizer.startOf(new Date(), 'day'),
  max = localizer.endOf(new Date(), 'day'),
  scrollToTime = localizer.startOf(new Date(), 'day'),
  enableAutoScroll = true,
  ...props
}) {
  const currRange = useMemo(
    () => Week.range(date, { localizer }),
    [date, localizer]
  )

  return (
    <TimeGridAllDay
      {...props}
      range={currRange}
      eventOffset={15}
      localizer={localizer}
      min={min}
      max={max}
      scrollToTime={scrollToTime}
      enableAutoScroll={enableAutoScroll}
    />
  )
}

MyWeek.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  localizer: PropTypes.object,
  max: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  scrollToTime: PropTypes.instanceOf(Date),
}

MyWeek.range = Week.range

MyWeek.navigate = Week.navigate

MyWeek.title = (date) => {
  return `My awesome week: ${date.toLocaleDateString()}`
}

export default function CustomView({ localizer }) {
  const { defaultDate, views } = useMemo(
    () => ({
      defaultDate: new Date(),
      views: {
        // month: true,
        week: MyWeek,
      },
    }),
    []
  )

  return (
    <Fragment>
      <DemoLink fileName="timeViewGrouped">
        <strong>The Calendar below implements a custom 3-day week view</strong>
      </DemoLink>
      <div className="height600">
        <Calendar
          defaultDate={defaultDate}
          defaultView={Views.WEEK}
          events={resourceEvents.events}
          resources={resourceEvents.list}
          localizer={localizer}
          views={views}
          selectable
          onSelectSlot={console.log}
          onSelectEvent={console.log}
          doShowMoreDrillDown={false}
        />
      </div>
    </Fragment>
  )
}
CustomView.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
}
