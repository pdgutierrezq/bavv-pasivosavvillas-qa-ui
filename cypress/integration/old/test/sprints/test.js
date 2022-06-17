describe('Capture browser network traffic', function () {
    context('Login functionality', () => {
      it('Dscro should be able to login', () => {
        cy.server()
  
        //This is the post call we are interested in capturing
        cy.route('POST', 'https://loginservice.example.net/login/json/authenticate').as('login')
  
        cy.visit('https://example.net/login')
  
        cy.get('#email').type('tester@gmail.com')
        cy.get('#password').type('Passw0rd1')
        cy.get('button[type=submit]').click()
        cy.wait('@login')
  
        //Assert on XHR
        cy.get('@login').then(function (xhr) {
          expect(xhr.status).to.eq(200)
          expect(xhr.requestHeaders).to.have.property('Content-Type')
          expect(xhr.requestHeaders).to.have.property('X-Password', 'Passw0rd1')
          expect(xhr.method).to.eq('POST')
          expect(xhr.responseBody).to.have.property('tokenId')
        })
      })
    })
  })