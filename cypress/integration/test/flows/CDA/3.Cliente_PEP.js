describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente PEP', function () {
    var pause = false;
    var flowConditions = {
      scr: false,
      accountType: 'DIGITAL',
      insurance: 'Si',
      gmf: false,
      declaring: false,
      environment: 'dev'
    };
    var userConditions = {
      captcha: 'ok',
      pep:true
    };

    cy.MockWs(userConditions)
    cy.FillForm(flowConditions.environment, userConditions.scr, pause)
  })

})
