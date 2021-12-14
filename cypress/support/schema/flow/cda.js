const {PHASE} = require("../phase");
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
const {GENERATE_PRESIGNED_URL} = require(
    "../../model/services/customer/documents/generate-presigned-url");
const {SQS_CDA_DOCUMENTS} = require(
    "../../model/services/customer/documents/sqs-cda-documents");
const {UPLOAD_DOCUMENT} = require(
    "../../model/services/customer/documents/upload-document");
const {PSE_BANK_LIST_SERVICE} = require("../../model/services/pse/bank/list");
const {PSE_CREATE_TRANSACTION} = require(
    "../../model/services/pse/transaction/create");
const {SAVE_RESUMES_CDT} = require(
    "../../model/services/transaction/summary/save-resumes-cdt");
const {PSE_CDT_REFUND_MONEY} = require(
    "../../model/services/pse/transaction/refund");
const {CREATE_SDS_USER_SERVICE} = require(
    "../../model/services/customer/sds/create");
const {SAVE_SUMMARY_TRANSACTION_SERVICE} = require(
    "../../model/services/transaction/summary/save");
const {CREATE_PRODUCT_PASIVE_SERVICE} = require(
    "../../model/services/product/create");
const user = require("../user");
let CDA = {
  NAME: user.APP.CDA,
  URL: Cypress.env().list[0].cda.baseUrl,
  DEFAULT: {
    mocks: {
      recaptcha: RECAPTCHA.OK,
      condition: CONDITION.CLIENT.UPDATED,
      account: ACCOUNTS.CAT.YES,
      insurance: INSURANCE.YES,
      otpCreate: OTP.CREATE.OK,
      otpValidate: OTP.VALIDATE.OK,
      channels: READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.TRUE,
      crm: CRM.OK,
      sdsUserService: CREATE_SDS_USER_SERVICE.RESPONSE.KO,
      saveSummaryTransaction: SAVE_SUMMARY_TRANSACTION_SERVICE.RESPONSE.OK,
      pdf: GET_PDF_SERVICE.RESPONSE.OK,
      createProductPasive: CREATE_PRODUCT_PASIVE_SERVICE.RESPONSE.OK,
      getDocumentsToCharge: GET_DOCUMENTS_TO_CHARGE.RESPONSE.ALL,
      generatePresignedUrl: GENERATE_PRESIGNED_URL.RESPONSE.OK,
      sqsCdaDocuments: SQS_CDA_DOCUMENTS.RESPONSE.OK,
      uploadDocument: UPLOAD_DOCUMENT.RESPONSE.OK,
      pseBankList: PSE_BANK_LIST_SERVICE.RESPONSE.OK,
      pseCreateTransaction: PSE_CREATE_TRANSACTION.RESPONSE.OK,
      saveResumesCdt: SAVE_RESUMES_CDT.RESPONSE.OK,
      pseCdtRefundMoney: PSE_CDT_REFUND_MONEY.RESPONSE.KO
    }
  },
  CLIENT: {
    YES: {
      UPDATED: {
        YES: {
          INSURANCE: {
            YES: {
              name: 'Cliente actualizado enrolado CON seguro',
              phases: [
                PHASE.CDA.INITIAL,
                PHASE.CDA.FINAL
              ],
              mocks: {}
            },
            NO: {
              name: 'Cliente actualizado enrolado SIN seguro',
              phases: [
                PHASE.CDA.INITIAL,
                PHASE.INSURANCE,
                PHASE.CDA.FINAL
              ],
              mocks: {
                insurance: INSURANCE.NO,
              }
            }
          }
        }
      }
    },
    NO: {
      UPDATED: {
        YES: {
          INSURANCE: {
            YES: {
              name: 'NO Cliente actualizado enrolado CON seguro',
              phases: [
                PHASE.CDA.INITIAL,
                PHASE.IDENTIFICATION,
                PHASE.CDA.NO_CLIENT,
                PHASE.CDA.FINAL
              ],
              mocks: {
                condition: CONDITION.NO_CLIENT.UPDATED,
              }
            },
            NO: {
              name: 'NO Cliente actualizado enrolado SIN seguro',
              phases: [
                PHASE.CDA.INITIAL,
                PHASE.INSURANCE,
                PHASE.CDA.FINAL
              ],
              mocks: {
                condition: CONDITION.NO_CLIENT.UPDATED,
                insurance: INSURANCE.NO,
              }
            }
          }
        }
      }
    }
  },
}

module.exports = {
  CDA
};
