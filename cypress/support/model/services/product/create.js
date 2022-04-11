const CREATE_PRODUCT_PASIVE_SERVICE = {
  METHOD: 'POST',
  URL: '**/create-passive-product',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/insurance/ko.json'
    },
    OK: {
      STATUS: 201,
      BODY: 'mock/product/create/ok.json'
    }
  }
}

module.exports = {
  CREATE_PRODUCT_PASIVE_SERVICE
};
