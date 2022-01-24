import {Fixtures} from "../../schema/fixtures";
import {RECAPTCHA_SERVICE} from "../services/security/recaptcha";
import {CUSTOMER_CONDITION_SERVICE} from "../services/customer/conditions";
import {CUSTOMER_ACCOUNTS_SERVICE} from "../services/customer/accounts";
import {CUSTOMER_INSURANCE_SERVICE} from "../services/customer/insurance";
import {UPDATE_DATA_CRM_SERVICE} from "../services/customer/crm/update";
import {CREATE_SDS_USER_SERVICE} from "../services/customer/sds/create";
import {SAVE_SUMMARY_TRANSACTION_SERVICE} from "../services/transaction/summary/save";
import {READE_ACTIVE_CHANNELS_SERVICE} from "../services/customer/channels/read";
import {GET_PDF_SERVICE} from "../services/customer/documents/pdf";
import {CREATE_PRODUCT_PASIVE_SERVICE} from "../services/product/create";
import {GET_DOCUMENTS_TO_CHARGE} from "../services/customer/documents/get-documents-to-charge";
import {GENERATE_PRESIGNED_URL} from "../services/customer/documents/generate-presigned-url";
import {SQS_CDA_DOCUMENTS} from "../services/customer/documents/sqs-cda-documents";
import {UPLOAD_DOCUMENT} from "../services/customer/documents/upload-document";
import {PSE_BANK_LIST_SERVICE} from "../services/pse/bank/list";
import {PSE_CREATE_TRANSACTION} from "../services/pse/transaction/create";
import {SAVE_RESUMES_CDT} from "../services/transaction/summary/save-resumes-cdt";
import {PSE_CDT_REFUND_MONEY} from "../services/pse/transaction/refund";
import {USER_IDENTITY_CREATE_SERVICE} from "../services/security/user/identity/create";
import {USER_IDENTITY_VALIDATE_SERVICE} from "../services/security/user/identity/validate";

let data
before(() => {
  cy.server()
  data = Fixtures.getInstance()
});

Cypress.Commands.add("executeFlow",
    (app, flow) => {
      cy.setMocks(app.DEFAULT.mocks)
      cy.setMocks(flow.mocks)
      cy.setData(flow.pages)
      cy.visit(app.URL)
      cy.runPagesList(flow.phases)
    })

Cypress.Commands.add("runPagesList",
    (pagesLists) => {
      for (let pages of pagesLists) {
        for (let page of pages) {
          cy.fillPage(data[page.name])
        }
      }
    })

Cypress.Commands.add("setMocks", (mocks) => {
  cy.setMock(RECAPTCHA_SERVICE, mocks.recaptcha)
  cy.setMock(CUSTOMER_CONDITION_SERVICE, mocks.condition)
  cy.setMock(CUSTOMER_ACCOUNTS_SERVICE, mocks.account)
  cy.setMock(CUSTOMER_INSURANCE_SERVICE, mocks.insurance)
  //cy.setMock(USER_IDENTITY_VALIDATE_SERVICE, mocks.otpValidate)
  //cy.setMock(USER_IDENTITY_CREATE_SERVICE, mocks.otpCreate)
  cy.setMock(UPDATE_DATA_CRM_SERVICE, mocks.crm)
  cy.setMock(CREATE_SDS_USER_SERVICE, mocks.sdsUserService)
  cy.setMock(SAVE_SUMMARY_TRANSACTION_SERVICE, mocks.saveSummaryTransaction)
  cy.setMock(READE_ACTIVE_CHANNELS_SERVICE, mocks.channels)
  cy.setMock(GET_PDF_SERVICE, mocks.pdf)
  cy.setMock(CREATE_PRODUCT_PASIVE_SERVICE, mocks.createProductPasive)
  cy.setMock(GET_DOCUMENTS_TO_CHARGE, mocks.getDocumentsToCharge)
  cy.setMock(GENERATE_PRESIGNED_URL, mocks.generatePresignedUrl)
  cy.setMock(SQS_CDA_DOCUMENTS, mocks.sqsCdaDocuments)
  cy.setMock(UPLOAD_DOCUMENT, mocks.uploadDocument)
  cy.setMock(PSE_BANK_LIST_SERVICE, mocks.pseBankList)
  cy.setMock(PSE_CREATE_TRANSACTION, mocks.pseCreateTransaction)
  cy.setMock(SAVE_RESUMES_CDT, mocks.saveResumesCdt)
  cy.setMock(PSE_CDT_REFUND_MONEY, mocks.pseCdtRefundMoney)
})

Cypress.Commands.add("setMock", (service, mock) => {
  if (typeof mock !== 'undefined') {
    cy.mockService(service, mock)
  }
})

Cypress.Commands.add("setData", (pagesLists) => {
  if (typeof pagesLists !== 'undefined') {
    for (let page of pagesLists) {
      Fixtures.mergeDataInPage(page.page.name, page.data)
    }
  }
})

module.exports = {
  data
}
