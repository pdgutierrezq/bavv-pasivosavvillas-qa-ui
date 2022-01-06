const {RECAPTCHA} = require(
    "../../model/entities/properties/security/recaptcha");
const {CONDITION} = require(
    "../../model/entities/properties/customer/conditions");
const {ACCOUNTS} = require("../../model/entities/properties/customer/accounts");
const {INSURANCE} = require(
    "../../model/entities/properties/customer/insurance");
const {READE_ACTIVE_CHANNELS_SERVICE} = require(
    "../../model/services/customer/channels/read");
const {OTP} = require(
    "../../model/entities/properties/security/user/identity/otp");
const {CRM} = require("../../model/entities/properties/customer/crm/update");
const {GET_PDF_SERVICE} = require(
    "../../model/services/customer/documents/pdf");
const {GET_DOCUMENTS_TO_CHARGE} = require(
    "../../model/services/customer/documents/get-documents-to-charge");
const {CREATE_SDS_USER_SERVICE} = require(
    "../../model/services/customer/sds/create");
const {SAVE_SUMMARY_TRANSACTION_SERVICE} = require(
    "../../model/services/transaction/summary/save");
const {CREATE_PRODUCT_PASIVE_SERVICE} = require(
    "../../model/services/product/create");
const user = require("../user");
let CDT = {
  NAME: user.APP.CDT,
  URL: Cypress.env().list[0].cdt.baseUrl,
  DEFAULT: {
    mocks: {
      recaptcha: RECAPTCHA.OK,
      condition: CONDITION.CLIENT.UPDATED,
      account: ACCOUNTS.CAT.NO,
      insurance: INSURANCE.YES,
      otpCreate: OTP.CREATE.OK,
      otpValidate: OTP.VALIDATE.OK,
      channels: READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.TRUE,
      crm: CRM.OK,
      sdsUserService: CREATE_SDS_USER_SERVICE.RESPONSE.OK,
      saveSummaryTransaction: SAVE_SUMMARY_TRANSACTION_SERVICE.RESPONSE.OK,
      pdf: GET_PDF_SERVICE.RESPONSE.OK,
      createProductPasive: CREATE_PRODUCT_PASIVE_SERVICE.RESPONSE.OK,
      getDocumentsToCharge: GET_DOCUMENTS_TO_CHARGE.RESPONSE.ALL,
      // generatePresignedUrl: GENERATE_PRESIGNED_URL.RESPONSE.OK,
      // sqsCdaDocuments: SQS_CDA_DOCUMENTS.RESPONSE.OK,
      // uploadDocument: UPLOAD_DOCUMENT.RESPONSE.OK,
      // pseBankList: PSE_BANK_LIST_SERVICE.RESPONSE.OK,
      // pseCreateTransaction: PSE_CREATE_TRANSACTION.RESPONSE.OK,
      // saveResumesCdt: SAVE_RESUMES_CDT.RESPONSE.OK,
      // pseCdtRefundMoney: PSE_CDT_REFUND_MONEY.RESPONSE.KO
    }
  }
}

module.exports = {
  CDT
};
