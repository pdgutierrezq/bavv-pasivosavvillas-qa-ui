let Mock = class Mock {
  constructor(
      service,
      response
  ) {
    this.service = service;
    this.response = response;
  }
}

module.exports = {
  Mock
};
