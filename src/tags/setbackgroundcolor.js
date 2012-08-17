(function(global) {

  global.quicktheatre.Parser.prototype['9'] = setBackgroundColor;

  var RGBA = global.quicktheatre.structs.RGBA;

  function setBackgroundColor(pLength) {
    // TODO: support wmmode transparent.
    var tRGBA = RGBA.load(this.r, false);
    this.add({type: 'background', color: tRGBA});
  }

}(this));
