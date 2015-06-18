module.exports = function(type, className, options) {
  options = typeof options === 'undefined' ? className : options;
  if(typeof className === 'undefined') {
    options = type;
    type = '';
  }
  var example = options.fn(this);
  var string =
    "<div class='example " + (typeof className === 'string' ? className : '') + "'>" + example + "</div>\n\n" +
    "```" + type + "\n" +
    example.replace(/<!--\s+\.\.\.\s+-->[\s\S]*?<!--\s+\/\.\.\.\s+-->/g, '...') +
    "```";
  return string;
};