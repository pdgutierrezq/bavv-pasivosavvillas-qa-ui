import 'cypress-file-upload';
import {RECAPTCHA_SERVICE} from "../services/security/recaptcha";
import {CUSTOMER_ACCOUNTS_SERVICE} from "../services/customer/accounts";
import {CUSTOMER_CONDITION_SERVICE} from "../services/customer/conditions";
import {CUSTOMER_INSURANCE_SERVICE} from "../services/customer/insurance";
import {UPDATE_DATA_CRM_SERVICE} from "../services/customer/crm/update";
import {PSE_BANK_LIST_SERVICE} from "../services/pse/bank/list";
import {READE_ACTIVE_CHANNELS_SERVICE} from "../services/customer/channels/read";
import {GET_PDF_SERVICE} from "../services/customer/documents/pdf";
import {GET_DOCUMENTS_TO_CHARGE} from "../services/customer/documents/get-documents-to-charge";
import {GENERATE_PRESIGNED_URL} from "../services/customer/documents/generate-presigned-url";
import {SQS_CDA_DOCUMENTS} from "../services/customer/documents/sqs-cda-documents";
import {UPLOAD_DOCUMENT} from "../services/customer/documents/upload-document";
import {PSE_CREATE_TRANSACTION} from "../services/pse/transaction/create";
import {SAVE_RESUMES_CDT} from "../services/transaction/summary/save-resumes-cdt";
import {PSE_CDT_REFUND_MONEY} from "../services/pse/transaction/refund";

Cypress.Commands.add("setMocks", (user, flow) => {
  cy.mockService(RECAPTCHA_SERVICE, flow.recaptcha)
  cy.mockService(CUSTOMER_CONDITION_SERVICE, user.condition)
  cy.mockService(CUSTOMER_ACCOUNTS_SERVICE, user.accounts)
  cy.mockService(CUSTOMER_INSURANCE_SERVICE, user.insurance)
  // cy.mockService(USER_IDENTITY_VALIDATE_SERVICE, flow.otpValidate)
  // cy.mockService(USER_IDENTITY_CREATE_SERVICE, flow.otpCreate)
  cy.mockService(UPDATE_DATA_CRM_SERVICE, flow.crm)
  // cy.mockService(CREATE_SDS_USER_SERVICE, CREATE_SDS_USER_SERVICE.RESPONSE.KO)
  // cy.mockService(SAVE_SUMMARY_TRANSACTION_SERVICE, SAVE_SUMMARY_TRANSACTION_SERVICE.RESPONSE.OK)
  cy.mockService(READE_ACTIVE_CHANNELS_SERVICE, user.channels)
  cy.mockService(GET_PDF_SERVICE, flow.pdf)
  // cy.mockService(CREATE_PRODUCT_PASIVE_SERVICE,CREATE_PRODUCT_PASIVE_SERVICE.RESPONSE.OK)

  cy.mockService(GET_DOCUMENTS_TO_CHARGE,
      GET_DOCUMENTS_TO_CHARGE.RESPONSE.NO_CC)
  cy.mockService(GENERATE_PRESIGNED_URL, GENERATE_PRESIGNED_URL.RESPONSE.OK)
  cy.mockService(SQS_CDA_DOCUMENTS, SQS_CDA_DOCUMENTS.RESPONSE.OK)
  cy.mockService(UPLOAD_DOCUMENT, UPLOAD_DOCUMENT.RESPONSE.OK)
  cy.mockService(PSE_BANK_LIST_SERVICE, PSE_BANK_LIST_SERVICE.RESPONSE.OK)
  cy.mockService(PSE_CREATE_TRANSACTION, PSE_CREATE_TRANSACTION.RESPONSE.OK)
  cy.mockService(SAVE_RESUMES_CDT, SAVE_RESUMES_CDT.RESPONSE.OK)
  cy.mockService(PSE_CDT_REFUND_MONEY, PSE_CDT_REFUND_MONEY.RESPONSE.KO)

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
