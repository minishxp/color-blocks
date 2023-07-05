window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  setTimeout(function() {
    console.log("QUARK LOGO!!!")
    document.getElementsByClassName("topbar-wrapper").item(0).childNodes.item(0).childNodes.item(0).src = "https://cdn.discordapp.com/attachments/914561779718320202/1126268984694685706/obby_logo_simplisitic_for_dark_bg.png"
  }, 10000)
  
  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "swagger.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    supportedSubmitMethods: []
  });
  //</editor-fold>
};
