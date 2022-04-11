const UPDATE_DATA_CRM_SERVICE = {
  METHOD: 'POST',
  URL: '**/update-data-crm',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/crm/update/fail.json'
    }
  }
}

module.exports = {
  UPDATE_DATA_CRM_SERVICE
};
