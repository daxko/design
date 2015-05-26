module.exports = function(type, options) {
  var example = options.fn(this);
  var string =
    "<div class='example'>" + example + "</div>\n\n" +
    "```" + type + "\n" +
    example +
    "```" +
    "\n</div>";
  return string;
};