'use strict'

var _interopRequireDefault =
  require('@babel/runtime/helpers/interopRequireDefault').default
Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0
var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray')
)
var _clsx = _interopRequireDefault(require('clsx'))
var _TimeGutterAllDaySlot = _interopRequireDefault(
  require('./TimeGutterAllDaySlot')
)
var _misc = require('./misc')
/** @import * as types from './TimeGutterAllDay.types*/
/** @import {RBCEvent, RBCResource} from './misc.types*/

/**
 * @template {NonNullable<unknown>} TEvent
 * @template {NonNullable<unknown>} TResource
 * @param {types.TimeGutterAllDayProps<TEvent, TResource>} props
 * @param {React.Ref<any>} ref Gutter Ref
 */
var TimeGutterAllDay = function TimeGutterAllDay(props, ref) {
  var resources = props.resources,
    components = props.components,
    getters = props.getters,
    accessors = props.accessors
  var TimeGutterWrapper = components.timeGutterWrapper
  var TimeGutterAllDaySlotComponent =
    components.timeGutterAllDaySlot || _TimeGutterAllDaySlot.default
  return /*#__PURE__*/ React.createElement(
    TimeGutterWrapper,
    {
      resources: resources,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'brbc-time-gutter',
        ref: ref,
      },
      resources.map(function (_ref, idx, arrayLen) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          resourceId = _ref2[0],
          resource = _ref2[1]
        var slotProps = getters ? getters.slotProp(resource) : {}
        var isLast = idx === arrayLen - 1
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            key: resourceId.toString(),
            className: (0, _clsx.default)(
              'brbc-resource-row',
              slotProps.className,
              isLast && 'brbc-last'
            ),
          },
          /*#__PURE__*/ React.createElement(TimeGutterAllDaySlotComponent, {
            resource: resource,
            accessors: accessors,
          })
        )
      })
    )
  )
}
var _default = (exports.default = (0, _misc.forwardRefWithGenerics)(
  TimeGutterAllDay
))
