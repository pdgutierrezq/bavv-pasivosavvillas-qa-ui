import 'cypress-file-upload';
import {CUSTOMER_CONDITION_SERVICE} from "../services/customer/conditions";
import {CUSTOMER_ACCOUNTS_SERVICE} from "../services/customer/accounts";
import {CUSTOMER_INSURANCE_SERVICE} from "../services/customer/insurance";
import {RECAPTCHA_SERVICE} from "../services/security/recaptcha";
import {RECAPTCHA} from "../entities/properties/security/recaptcha";

Cypress.Commands.add("MockWs", (userConditions, user,recaptcha=RECAPTCHA.OK) => {
  if (userConditions.captcha == 'lowscore') {
    before(() => {
      cy.visit('', {
        onBeforeLoad: win => {
          Object.defineProperty(win.navigator, 'userAgent', {
            value: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
          });
        },
      });
    });
  }

  cy.mockService(RECAPTCHA_SERVICE,recaptcha)
  cy.mockService(CUSTOMER_CONDITION_SERVICE,user.condition)
  cy.mockService(CUSTOMER_ACCOUNTS_SERVICE,user.accounts)
  cy.mockService(CUSTOMER_INSURANCE_SERVICE,user.insurance)

  cy.Summary(userConditions.summary)
  cy.ReadChannels(userConditions.channels)
  cy.GetDocs(userConditions.docs)

  // cy.GetPdf(userConditions.getpdf)
  //  cy.UserIdentityGenerate(userConditions.otp)
  // cy.UpdateCrm(userConditions.updateCrm)
  // cy.CreateSdsUser(userConditions.sds)
  // cy.PseCreateTransaction(userConditions.pseCreate)
  // cy.CreatePasiveProduct(userConditions.cpp)
  // cy.GetBankList()
  // //cy.Sqs(userConditions.sqs)
  //cy.GenerateUrl(userConditions.generateUrl)
  //cy.LoadDocsPresigned(userConditions.loadPresigned)
  //cy.SaveDocs()

})

Cypress.Commands.add("GetBankList", (option) => {
  cy.route({
    method: 'GET',
    url: '**/pse-get-bank-list',
    status: 200,
    response: 'fixture:get-bank-list-ok.json'
  })
})

Cypress.Commands.add("CreatePasiveProduct", (option) => {
  if (option == 'FAIL') {
    cy.route({
      method: 'POST',
      url: '**/create-passive-product',
      status: 500,
      response: 'fixture:create-passive-product-fail.json'
    })
  } else if (option == 'PASS') {
    cy.route({
      method: 'POST',
      url: '**/create-passive-product',
      status: 201,
      response: 'fixture:create-passive-product.json'
    })
  }
})

Cypress.Commands.add("PseCreateTransaction", (option) => {
  if (option == 'FAIL') {
    cy.route({
      method: 'POST',
      url: '**/pse-create-transaction',
      status: 500,
      response: 'fixture:pse-create-transaction-fail.json'
    })
  } else if (option == 'PASS') {
    cy.route({
      method: 'POST',
      url: '**/create-sds-user',
      status: 201,
      response: 'fixture:create-sds-user-pass.json'
    })
  }
})

Cypress.Commands.add("CreateSdsUser", (option) => {
  if (option == 'FAIL') {
    cy.route({
      method: 'POST',
      url: '**/create-sds-user',
      status: 500,
      response: 'fixture:create-sds-user-fail.json'
    })
  } else if (option == 'PASS') {
    cy.route({
      method: 'POST',
      url: '**/create-sds-user',
      status: 201,
      response: 'fixture:create-sds-user-pass.json'
    })
  }
})

Cypress.Commands.add("GetPdf", (option) => {
  if (option == 'FAIL') {
    cy.route({
      method: 'POST',
      url: '**/get-pdf',
      status: 500,
      response: 'fixture:get-pdf-fail.json'
    })
  } else if (option == 'PASS') {
    cy.route('POST', '**/get-pdf', 'fixture:get-pdf-pass.json')
  }
})

Cypress.Commands.add("Summary", (option) => {
  if (option == 'true') {
    cy.route('GET', '**/insurance-validation',
        'fixture:insurance-validation-true.json')
  } else if (option == 'false') {
    cy.route('GET', '**/insurance-validation',
        'fixture:insurance-validation-false.json')
  } else if (option == 'fail') {
    cy.route({
      method: 'GET',
      url: '**/read-summary-transaction-cdt',
      status: 500,
      response: 'fixture:read-summary-transaction-cdt-fail.json'
    })
    // cy.route('POST', '**/insurance-validation', 'fixture:insurance-validation-fail.json')
  }
})

Cypress.Commands.add("UserIdentityGenerate", (option) => {
  if (option == 'PASS') {
    cy.route({
      method: 'POST',
      url: '**/user-identity',
      status: 201,
      response: 'fixture:user-identity-create.json'
    })
  }
})

Cypress.Commands.add("UserIdentityValidate", (option) => {
  if (option == 'PASS') {
    cy.route('POST', '**/user-identity', 'fixture:user-identity-validate.json')
  } else if (option == 'FAIL') {
    cy.route({
      method: 'POST',
      url: '**/user-identity',
      status: 500,
      response: 'fixture:user-identity-validate-fail.json'
    })
  } else if (option == 'WRONG_PASS') {
    cy.route({
      method: 'POST',
      url: '**/user-identity',
      status: 206,
      response: 'fixture:user-identity-wrong-pass.json'
    })
  } else if (option == 'NO_REGISTRA') {
    cy.route('POST', '**/user-identity',
        'fixture:user-identity-validate-200-error.json')
  } else if (option == 'UTILIZADA') {
    cy.route({
      method: 'POST',
      url: '**/user-identity',
      status: 206,
      response: 'fixture:user-identity-validate-utilizada.json'
    })
  } else if (option == 'ANULADA') {
    cy.route({
      method: 'POST',
      url: '**/user-identity',
      status: 206,
      response: 'fixture:user-identity-validate-anulada.json'
    })
  } else if (option == 'VENCIDA') {
    cy.route({
      method: 'POST',
      url: '**/user-identity',
      status: 206,
      response: 'fixture:user-identity-vencida.json'
    })
  }

})

Cypress.Commands.add("RecaptchaLanding", () => {

  cy.route('POST', '**/recaptchaV3?exclude-interceptor=true',
      'fixture:recaptcha_ok.json')

})

Cypress.Commands.add("Recaptcha", (option) => {
  if (option == 'timeout') {
    cy.route('POST', '**/recaptchaV3', 'fixture:recaptcha-timeout.json')
  } else if (option == 'lowscore') {
    cy.route('POST', '**/recaptchaV3', 'fixture:recaptcha_low_score.json')
  } else if (option == 'ok') {
    cy.route('POST', '**/recaptchaV3', 'fixture:recaptcha_ok.json')
  } else if (option == '500') {
    cy.route({
      method: 'POST',
      url: '**/recaptchaV3',
      status: 500,
      response: 'fixture:recaptcha_500.json'
    })
  }
})

Cypress.Commands.add("UpdateCrm", (pass) => {
  if (pass == 'fail') {
    cy.route({
      method: 'POST',
      url: '**/update-data-crm',
      status: 500,
      response: 'fixture:update-data-crm-fail.json'
    })
  } else if (pass == 'pass') {
    cy.route('POST', '**/update-data-crm', 'fixture:update-data-crm-ok.json')
  } else if (pass == '125') {
    cy.route('POST', '**/update-data-crm', 'fixture:update-data-crm-125.json')
  } else if (pass == '126') {
    cy.route('POST', '**/update-data-crm', 'fixture:update-data-crm-126.json')
  } else if (pass == '127') {
    cy.route('POST', '**/update-data-crm', 'fixture:update-data-crm-127.json')
  }

})

Cypress.Commands.add("UploadCc", () => {
  cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
  cy.get('.mat-radio-outer-circle').first().click({force: true})
  const fileName = 'pasivodocs/cc1.jpg';
  const fileName2 = 'files/SampleFile.pdf';

  // if(side=='frontal'){
  //     fileName = 'pasivodocs/cc1.jpg';

  // }else{
  //     fileName = 'pasivodocs/cc2.jpg';
  // }
  cy.get('[type="file"]').attachFile(fileName, {force: true});
  cy.get('#FrontIDPic').attachFile(fileName, {force: true});
  cy.get('[type="file"]').attachFile(fileName2, {force: true});
  cy.get('#FrontIDPic').attachFile(fileName2, {force: true});

})

Cypress.Commands.add("ReadChannels", (channels) => {
  if (channels == 'TRUE') {
    cy.route('GET', '**/read-active-channels',
        'fixture:read-active-channels-true.json')
  } else if (channels == 'FALSE') {
    cy.route('GET', '**/read-active-channels',
        'fixture:read-active-channels-false.json')
  } else if (channels == 500) {
    cy.route({
      method: 'GET',
      url: '**/read-active-channels',
      status: 500,
      response: 'fixture:user-identity-validate-fail.json'
    })
  }
})

Cypress.Commands.add("LoadDocsPresigned", (success) => {
  if (success == 'success') {
    cy.route({
      method: 'PUT',
      url: '**/1095798406/**',
      status: 200
    })
  } else if (success = 'any') {

    cy.route({
      method: 'PUT',
      url: '**/1095798406/**',
      status: 200,
      response: {success: true}
    })
    // cy.route({
    //     method: 'PUT',
    //     url: '**/CL-1095798406-1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA6KFJQTVGQD5THXMH%2F20200728%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200728T181327Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLWVhc3QtMiJHMEUCIQDIzkGwN3QxmtXHumLvjHj6Fbcewrjt1N7UoxXyPFf1YQIgQuD8plxHkYXl%2FExf5lwhT%2BncQybMKvLgwoz9dPz2I7sq7AEI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw5ODM5MDMwMTgzMTciDCclSXr%2Fnx4nVLnHIirAAT9LNbs6cE6k3FYN3YXeqOibhqARdas1PIRwHRohBHpZ%2FW5dGyyF4f6%2FzhgwhCOlrT3UfnwT5w1JlNxzj72bP4IKzBXm9T%2FtPNir%2FvAAlS%2FBeCjt%2B0swJbC6z%2BWTBAgXhMvHlhuzw%2B77GJkX5GlD2rUxc1vptjQ7zYP4fsPtwq8k2ACyD37tsT4MUgf6spQedcXOECVLZ52rHXXfmX1SWBm%2BGRvg7j6C4NIv3OjYo3vty8UHUEMP41H8MKUJ1Cq%2B3DCe0YH5BTrgAdyPL5kQWkauYL4IE8ggLiuKa6jTrRzpmlt65U0XpsgJ2zGVo0coVcyp6GEFnv255BhJkDnvKBbYTo3DRnXx%2F4viPIVpDUBlp9kw%2BHhDxfeFYMWXGGxB1ZrlUPMLERPGMVBL3aWynilJ%2BfLPGCDZ5GB52Pwi%2BIzCAEyCzPqsXTOnFdBVGgnWYFUx4elZTQkgeUL5LtwYaUKb5vEPjIxpkus9TjHdiCt8b%2B6E5pq6a8%2FUPxNGtvD2ZKOR3t5AOQm2%2ByaZCFidsd0fA%2BrHAmvtALvdx16VJ7nd8DlHuvLw7YVH&X-Amz-Signature=cc271ae3c542408fc99a6601803df7e00632cfc47d24b0a6c7d520b917e85d6a&X-Amz-SignedHeaders=host',
    //     status: 500,
    //     response: 'fixture:load-presigned.json'
    // })
  }
  // else {
  //     cy.route({
  //         method: 'PUT',
  //         url: 'https://rb-pasivo-dev-documents-client-bkt.s3.us-east-2.amazonaws.com/CDA/DocumentoDigital/1095798406/CL-1095798406-0.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA6KFJQTVGXIUS5QWS%2F20200728%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200728T171348Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLWVhc3QtMiJHMEUCIQCv9LgaEdZqoXyjDU0m19lWV3FODfjqUJ%2BcCu148CZm6QIgaUBQkjsjYyatfntkJrC%2BjXW7%2B4UGaZqrsqj3NrLyEG8q7AEI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw5ODM5MDMwMTgzMTciDM7Yk3uJKaU09P3VuirAAe6wL57ZplQ8s3oJd9nnFkTDsVFvt%2B%2FSRMxGHdaSElT%2BaNS61YOxBrtaXOEIALP%2BdGuGKzHQ5OPZWZ%2BV7Itf%2BAhE2FiHv0fyw8pLryu5EjDyA8rPjvjHHOzs7ewIjSDUZY7HMsNC4Izqx4Xthk5DqmNre2xlMIPELq0UdTmEZ0j6ZumtErX%2BZ4KKn%2FTPRer3Qv3VIOMddu7eBSlhb6aDxCMDlxk03MWnvZk2sHq%2BCtR7K%2BKc%2B0DMGHnCUXie0j91rjC3qoH5BTrgAWD%2FRk13cVRz%2FE6d3NOA2rfnBorGjshL1YfPK3GOK8EGlJ9Ja1atksdlvkYevgSJd4qgcHu%2FKVwEr7GgA7J5N3eQMYqNxSgw3nmihXyEh7iByh8NU%2BZr8tc7%2BQ0DzZO%2FBec3E3aHnPesOB0j%2B33ECH7Qh52I8RhjVqmQCgdUi55WliZx1V816nQS1mHTbo1Uij9TKkt1P0fJo7Ur1WU3KX2fYlZTGIgf7k2NYavH0LwYnzsI0kdw9q5TjNKOCaLnXuibfKyngKBw1YEgCgDzWnIlytptDl29zWbRQmK9PakI&X-Amz-Signature=dbd83437014a017720fab63652da6fa18daaa8ef7d20884ccec34fb1f9aa2cd3&X-Amz-SignedHeaders=host',
  //         status: 500,
  //         response: 'fixture:sqs-cda-documents-fail.json'
  //     })
  // }

})

Cypress.Commands.add("GenerateUrl", (success) => {
  if (success == 'success') {
    cy.route({
      method: 'POST',
      url: '**/generate-presigned-url',
      status: 201,
      response: 'fixture:generate-presigned-url-success.json'
    })
  } else if (success == 'fail') {
    cy.route({
      method: 'POST',
      url: '**/generate-presigned-url',
      status: 500,
      response: 'fixture:generate-presigned-url-fail.json'
    })
  } else if (success == 'two docs') {
    cy.route({
      method: 'POST',
      url: '**/generate-presigned-url',
      status: 201,
      response: 'fixture:generate-presigned-url-two-docs.json'
    })
  }
})

Cypress.Commands.add("Sqs", (success) => {
  if (success == 'success') {
    cy.route('POST', '**/sqs-cda-documents',
        'fixture:sqs-cda-documents-success.json')
  } else {
    cy.route({
      method: 'POST',
      url: '**/sqs-cda-documents',
      status: 500,
      response: 'fixture:sqs-cda-documents-fail.json'
    })
  }

})

Cypress.Commands.add("SaveDocs", () => {
  cy.route('POST', '**/save-document', 'fixture:save-docs-success.json')
  // cy.route({
  //     method: 'POST',
  //     url: '**/save-document',
  //     status: 500,
  //     response: 'fixture:get-documents-fail.json'
  // })
})

Cypress.Commands.add("GetDocs", (docsType) => {
  if (docsType == 'Empleado') {
    cy.route('POST', '**/get-documents-to-charge',
        'fixture:get-documents-all.json')
  } else if (docsType == 'cc') {
    cy.route('POST', '**/get-documents-to-charge',
        'fixture:get-documents-only-cc.json')
  } else if (docsType == 'no cc') {
    cy.route('POST', '**/get-documents-to-charge',
        'fixture:get-documents-no-cc.json')
  } else if (docsType == 'fail') {
    cy.route({
      method: 'POST',
      url: '**/get-documents-to-charge',
      status: 500,
      response: 'fixture:get-documents-fail.json'
    })
  }
  // else {
  //     cy.route('POST', '**/get-documents-to-charge', 'fixture:get-documents-no-doc.json')
  // }
})
