"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require("react"),
    string = React.PropTypes.string;


var Icon = React.createClass({
  displayName: "Icon",

  propTypes: {
    name: string.isRequired,
    prefix: string,
    iconSvg: string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefix: "icon",
      iconSvg: "images/icons.svg"
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    var _this = this;

    return Object.keys(nextProps).some(function (key) {
      return _this.props[key] !== nextProps[key];
    });
  },
  render: function render() {
    var _props = this.props,
        prefix = _props.prefix,
        iconSvg = _props.iconSvg,
        name = _props.name,
        rest = _objectWithoutProperties(_props, ["prefix", "iconSvg", "name"]);

    return React.createElement(
      "svg",
      _extends({
        className: prefix + " " + prefix + "-" + name,
        viewBox: "0 0 24 24"
      }, rest),
      React.createElement("use", { xlinkHref: iconSvg + "#" + prefix + "-" + name })
    );
  }
});

module.exports = Icon;
