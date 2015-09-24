document.addEventListener("DOMContentLoaded", function() {

  var module = {};

  module.bindListeners = function() {
    document.getElementById('preview').addEventListener('click', module.renderPreview, false);
    document.getElementById('stanza-site').addEventListener('click', module.viewStanza, false);
  };

  module.renderPreview = function(event) {
    var imgLink = event.target.currentSrc;
    window.open(imgLink);
  };

  module.viewStanza = function() {
    var url = 'https://stanza.co/';
    window.open(url);
  };
  module.bindListeners();
});
