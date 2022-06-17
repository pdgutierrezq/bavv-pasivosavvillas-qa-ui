
describe('Sprint 83', function () {
    beforeEach(function () {
        cy.server()
    })
    it('pse rechazado', function () {
        var userConditions = { captcha: 'ok', client: true, updated: true, return: false };
        var pause = false;
        var flowConditions = { environment: 'dev', declaring: true, funding:'PSE',rend:'ACCOUNT',status:'RECHAZAR' };

        cy.setMocks(userConditions)
        cy.PseFlow(flowConditions,pause)
    })
    it.only('pse fallido', function () {
        var userConditions = { captcha: 'ok', client: true, updated: true, return: false };
        var pause = false;
        var flowConditions = { environment: 'dev', declaring: true, funding:'PSE',rend:'ACCOUNT',status:'FALLIDA' };

        cy.setMocks(userConditions)
        cy.PseFlow(flowConditions,pause)
    })

    it('pse aprobado', function () {
        var userConditions = { captcha: 'ok', client: true, updated: true, return: false };
        var pause = false;
        var flowConditions = { environment: 'dev', declaring: true, funding:'PSE',rend:'ACCOUNT',status:'APROBAR' };

        cy.setMocks(userConditions)
        cy.PseFlow(flowConditions,pause)
    })
    
    it('pse pendiente', function () {
        var userConditions = { captcha: 'ok', client: true, updated: true, return: false };
        var pause = false;
        var flowConditions = { environment: 'dev', declaring: true, funding:'PSE',rend:'ACCOUNT',status:'PENDIENTE' };

        cy.setMocks(userConditions)
        cy.PseFlow(flowConditions,pause)
    })


})
