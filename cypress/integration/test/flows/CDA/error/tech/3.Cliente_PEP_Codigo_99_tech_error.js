import {User} from "../../../../../../support/model/entities/user";
import {CONDITION} from "../../../../../../support/model/entities/properties/customer/conditions";
import {ACCOUNTS} from "../../../../../../support/model/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../../../support/model/entities/properties/customer/insurance";
import {Flow} from "../../../../../../support/model/entities/flow";
import {RECAPTCHA} from "../../../../../../support/model/entities/properties/security/recaptcha";
import {OTP} from "../../../../../../support/model/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../../../support/model/entities/properties/customer/crm/update";

describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente PEP', function () {
    let user = new User(CONDITION.CODE_99, ACCOUNTS.CAT.NO,
        INSURANCE.YES)
    let flow = new Flow(RECAPTCHA.OK, OTP.CREATE.OK, OTP.VALIDATE.OK, CRM.OK)
    var userConditions = {
      captcha: 'ok',
      pep: true
    };

    cy.setMocks( user, flow)
    cy.fillBasicInformationPage()
  })

})
