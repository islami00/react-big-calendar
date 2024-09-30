'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0
var _misc = require('./misc')
/** @import * as types from "./TimeGutterAllDaySlot.types" */

/**
 * @template {NonNullable<unknown>} TResource
 * @param {types.TimeGutterAllDaySlotProps<TResource>} props
 * @param {React.Ref<any>} ref
 */
function TimeGutterAllDaySlot(props, ref) {
  var accessors = props.accessors,
    resource = props.resource
  return /*#__PURE__*/ React.createElement(
    'span',
    {
      className: 'rbc-label',
      ref: ref,
    },
    accessors.resourceTitle(resource)
  )
}
var _default = (exports.default = (0, _misc.forwardRefWithGenerics)(
  TimeGutterAllDaySlot
))
