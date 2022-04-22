const PRODUCT_CONFIGURATION_SERVICE = {
  METHOD: 'GET',
  URL: '**/get-product-configuration**',
  RESPONSE: {
    KO: {
      STATUS: 404,
      BODY: 'mock/configuration/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/configuration/ok.json'
    }
  }
}

module.exports = {
  PRODUCT_CONFIGURATION_SERVICE
};
