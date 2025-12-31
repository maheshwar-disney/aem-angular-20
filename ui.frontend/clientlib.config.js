module.exports = {
  clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/my-site/clientlibs",
  libs: [
    {
      name: "clientlib-angular",
      allowProxy: true,
      categories: ["my-site.angular"],
      serializationFormat: "xml",
      extraScriptAttributes: ["type=module"],
      assets: {
        js: [
          "dist/clientlib-site/browser/polyfills.js",
          "dist/clientlib-site/browser/main.js"
        ],
        css: [
          "dist/clientlib-site/browser/styles.css" // Point to specific file if possible
        ],
        resources: {
           base: "dist/clientlib-site/browser",
           flatten: false,
           files: [
              "assets/**/*" // This limits it to ONLY your Angular assets folder
           ]
        }
      }
    }
  ]
};