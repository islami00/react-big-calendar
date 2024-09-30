/** @import * as types from "./TimeGutterAllDaySlot.types" */
import * as React from 'react'
import { forwardRefWithGenerics } from './misc'
/**
 * @template {NonNullable<unknown>} TResource
 * @param {types.TimeGutterAllDaySlotProps<TResource>} props
 * @param {React.Ref<any>} ref
 */
function TimeGutterAllDaySlot(props, ref) {
  const { accessors, resource } = props
  return (
    <span className="rbc-label" ref={ref}>
      {accessors.resourceTitle(resource)}
    </span>
  )
}
export default forwardRefWithGenerics(TimeGutterAllDaySlot)
