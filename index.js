var i18n = require("i18next");
i18n.init({resGetPath: __dirname+'/locales/__lng__.json'})
module.exports = {
      expressMiddlewear: i18n.handle
}

