import {CONDITION} from "../../../../support/entities/properties/customer/conditions";
import {User} from "../../../../support/entities/user";
import {Flow} from "../../../../support/entities/flow";
import {ACCOUNTS} from "../../../../support/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/entities/properties/customer/insurance";
import {RECAPTCHA} from "../../../../support/entities/properties/security/recaptcha";
import {OTP} from "../../../../support/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../support/entities/properties/customer/crm/update";

describe('CDA', function () {

  it('Cliente actualizado enrolado CON seguro', function () {
    let user = new User(
        CONDITION.CLIENT.UPDATED,
        ACCOUNTS.CAT.NO,
        INSURANCE.NO
    )
    let flow = new Flow(
        RECAPTCHA.OK,
        OTP.CREATE.OK,
        OTP.VALIDATE.OK,
        CRM.OK
    )
    cy.executeFlow(user, flow)
  })
})
