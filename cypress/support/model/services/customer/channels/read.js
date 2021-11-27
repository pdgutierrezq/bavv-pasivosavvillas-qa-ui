const READE_ACTIVE_CHANNELS_SERVICE = {
  METHOD: 'GET',
  URL: '**/read-active-channels',
  RESPONSE: {
    KO: {
      STATUS: 404,
      BODY: 'mock/customer/channels/ko.json'
    },
    TRUE: {
      STATUS: 200,
      BODY: 'mock/customer/channels/ok-true.json'
    },
    FALSE: {
      STATUS: 200,
      BODY: 'mock/customer/channels/ok-false.json'
    }
  }
}

module.exports = {
  READE_ACTIVE_CHANNELS_SERVICE
};
