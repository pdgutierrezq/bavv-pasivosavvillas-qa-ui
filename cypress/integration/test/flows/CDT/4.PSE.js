describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('CDT - Fondeo por PSE', function () {
    var userConditions = { captcha: 'ok', client: true, updated: true, return: false };
    var pause = false;
    var flowConditions = { environment: 'stg', declaring: true, funding:'PSE',rend:'ACCOUNT',status:'APROBAR' };

    cy.MockWs(userConditions)
    cy.PseFlow(flowConditions,pause)
  })

})
