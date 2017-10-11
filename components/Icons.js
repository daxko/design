"use strict";

var React = require("react"),
  { string } = React.PropTypes;

var Icon = React.createClass({
  propTypes: {
    name: string.isRequired,
    prefix: string,
    iconSvg: string
  },

  getDefaultProps() {
    return {
      prefix: "icon",
      iconSvg: "images/icons.svg"
    };
  },

  shouldComponentUpdate(nextProps) {
    return Object.keys(nextProps).some(key => {
      return this.props[key] !== nextProps[key];
    });
  },

  render() {
    var { prefix, iconSvg, name, ...rest } = this.props;
    return (
      <svg
        className={`${prefix} ${prefix}-${name}`}
        viewBox="0 0 24 24"
        {...rest}
      >
        <use xlinkHref={`${iconSvg}#${prefix}-${name}`} />
      </svg>
    );
  }
});

module.exports = Icon;
