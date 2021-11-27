import {CONDITION} from "../../../../support/model/entities/properties/customer/conditions";
import {User} from "../../../../support/model/entities/user";
import {Flow} from "../../../../support/model/entities/flow";
import {ACCOUNTS} from "../../../../support/model/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/model/entities/properties/customer/insurance";
import {RECAPTCHA} from "../../../../support/model/entities/properties/security/recaptcha";
import {OTP} from "../../../../support/model/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../support/model/entities/properties/customer/crm/update";

describe('CDA', function () {

  it('Cliente actualizado enrolado CON seguro', function () {
    let user = new User(
        CONDITION.CLIENT.UPDATED,
        ACCOUNTS.CAT.NO,
        INSURANCE.YES
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
