import 'cypress-file-upload';
import {RECAPTCHA_SERVICE} from "../services/security/recaptcha";
import {CUSTOMER_ACCOUNTS_SERVICE} from "../services/customer/accounts";
import {CUSTOMER_CONDITION_SERVICE} from "../services/customer/conditions";
import {CUSTOMER_INSURANCE_SERVICE} from "../services/customer/insurance";
import {UPDATE_DATA_CRM_SERVICE} from "../services/customer/crm/update";
import {PSE_BANK_LIST_SERVICE} from "../services/pse/bank/list";
import {CREATE_SDS_USER_SERVICE} from "../services/customer/sds/create";
import {SAVE_SUMMARY_TRANSACTION_SERVICE} from "../services/transaction/summary/save";
import {READE_ACTIVE_CHANNELS_SERVICE} from "../services/customer/channels/read";
import {GET_PDF_SERVICE} from "../services/customer/documents/pdf";
import {CREATE_PRODUCT_PASIVE_SERVICE} from "../services/product/create";
import {GET_DOCUMENTS_TO_CHARGE} from "../services/customer/documents/get-documents-to-charge";
import {GENERATE_PRESIGNED_URL} from "../services/customer/documents/generate-presigned-url";
import {SQS_CDA_DOCUMENTS} from "../services/customer/documents/sqs-cda-documents";
import {UPLOAD_DOCUMENT} from "../services/customer/documents/upload-document";

Cypress.Commands.add("MockWs", (userConditions, user, flow) => {
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

  cy.mockService(RECAPTCHA_SERVICE, flow.recaptcha)
  cy.mockService(CUSTOMER_CONDITION_SERVICE, user.condition)
  cy.mockService(CUSTOMER_ACCOUNTS_SERVICE, user.accounts)
  cy.mockService(CUSTOMER_INSURANCE_SERVICE, user.insurance)
  // cy.mockService(USER_IDENTITY_VALIDATE_SERVICE, flow.otpValidate)
  // cy.mockService(USER_IDENTITY_CREATE_SERVICE, flow.otpCreate)
  cy.mockService(UPDATE_DATA_CRM_SERVICE, flow.crm)
  // cy.mockService(PSE_BANK_LIST_SERVICE, PSE_BANK_LIST_SERVICE.RESPONSE.OK)
  // cy.mockService(CREATE_SDS_USER_SERVICE, CREATE_SDS_USER_SERVICE.RESPONSE.KO)
  // cy.mockService(SAVE_SUMMARY_TRANSACTION_SERVICE, SAVE_SUMMARY_TRANSACTION_SERVICE.RESPONSE.OK)
  cy.mockService(READE_ACTIVE_CHANNELS_SERVICE,user.channels)
  cy.mockService(GET_PDF_SERVICE,flow.pdf)
  // cy.mockService(CREATE_PRODUCT_PASIVE_SERVICE,CREATE_PRODUCT_PASIVE_SERVICE.RESPONSE.OK)

  cy.mockService(GET_DOCUMENTS_TO_CHARGE,GET_DOCUMENTS_TO_CHARGE.RESPONSE.NO_CC)
  cy.mockService(GENERATE_PRESIGNED_URL,GENERATE_PRESIGNED_URL.RESPONSE.OK)
  cy.mockService(SQS_CDA_DOCUMENTS,SQS_CDA_DOCUMENTS.RESPONSE.OK)
  cy.mockService(UPLOAD_DOCUMENT,UPLOAD_DOCUMENT.RESPONSE.OK)

  // cy.PseCreateTransaction(userConditions.pseCreate)
  //cy.LoadDocsPresigned(userConditions.loadPresigned)
  //cy.SaveDocs()

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

Cypress.Commands.add("SaveDocs", () => {
  cy.route('POST', '**/save-document', 'fixture:save-docs-success.json')
  // cy.route({
  //     method: 'POST',
  //     url: '**/save-document',
  //     status: 500,
  //     response: 'fixture:get-documents-fail.json'
  // })
})
