const CREATE_SDS_USER_SERVICE = {
  METHOD: 'POST',
  URL: '**/create-sds-user',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/sds/create/ko.json'
    },
    NO_FUE_POSIBLE_LA_CONEXION: {
      STATUS: 206,
      BODY: 'mock/customer/sds/create/206.json'
    },
    OK: {
      STATUS: 201,
      BODY: 'mock/customer/sds/create/ok.json'
    }
  }
}

module.exports = {
  CREATE_SDS_USER_SERVICE
};
