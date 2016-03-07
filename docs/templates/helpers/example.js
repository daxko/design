module.exports = function(type, className, options) {
  options = typeof options === 'undefined' ? className : options;
  if(typeof className === 'undefined') {
    options = type;
    type = '';
  }
  var string = options.fn(this)
    , codeBlock
    , exampleBlock;

  codeBlock = '<div class="example ' + (typeof className === 'string' ? className : '') + '">' + string + "</div>\n\n";

  // use ellipses to collapse code examples
  exampleBlock =
    "```" + type + "\n" +
    string.replace(/<!--\s+\.\.\.\s+-->[\s\S]*?<!--\s+\/\.\.\.\s+-->/g, '...') +
    "```";

  // use hide to hide code examples
  exampleBlock = exampleBlock.replace(/<!--\s+hide\s+-->[\s\S]*?<!--\s+\/hide\s+-->[\n\s]+/g, '');

  return codeBlock + exampleBlock;
};