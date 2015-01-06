module.exports = (env, callback) ->

  defaults =
    template: 'page.hbs'
    theme: 'red-velvet'

  class Page extends env.plugins.MarkdownPage

    getTemplate: ->
      @metadata.template or defaults.template or super()

    @property 'theme', ->
      @metadata.theme or defaults.theme

  env.registerContentPlugin 'posts', '**/*.*(markdown|mkd|md)', Page

  callback()