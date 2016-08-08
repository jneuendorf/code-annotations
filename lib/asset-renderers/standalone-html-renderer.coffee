AssetRenderer = require './asset-renderer'

module.exports = class StandaloneHtmlRenderer extends AssetRenderer

    @parent: AssetRenderer
    @fileExtension: ["s.html", "s.htm"]
    @isTextBased: true
    @description: "Render HTML in an iframe (this enables complete capsulation of CSS and JavaScript)"

    _render: () ->
        iframe = document.createElement("iframe")
        # TODO: pass e.g. text color as get parameter + container dimensions
        iframe.src = @asset.getPath()
        return iframe