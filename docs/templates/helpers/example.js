module.exports = function(type, className, options) {
  options = typeof options === 'undefined' ? className : options;
  var example = options.fn(this);
  var string =
    "<div class='example " + className + "'>" + example + "</div>\n\n" +
    "```" + type + "\n" +
    example +
    "```" +
    "\n</div>";
  return string;
};