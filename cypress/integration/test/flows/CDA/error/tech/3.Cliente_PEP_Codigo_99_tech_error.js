import {User} from "../../../../../../support/entities/user";
import {CONDITION} from "../../../../../../support/entities/properties/customer/conditions";
import {ACCOUNTS} from "../../../../../../support/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../../../support/entities/properties/customer/insurance";
import {Flow} from "../../../../../../support/entities/flow";
import {RECAPTCHA} from "../../../../../../support/entities/properties/security/recaptcha";
import {OTP} from "../../../../../../support/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../../../support/entities/properties/customer/crm/update";

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
