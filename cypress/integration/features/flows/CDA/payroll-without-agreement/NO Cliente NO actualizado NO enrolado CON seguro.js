import {PHASE} from "../../../../../support/schema/phase";
import {
  CONDITION
} from "../../../../../support/model/entities/properties/customer/conditions";
import {
  INSURANCE
} from "../../../../../support/model/entities/properties/customer/insurance";
import {
  READE_ACTIVE_CHANNELS_SERVICE
} from "../../../../../support/model/services/customer/channels/read";
import {CDA} from "../../../../../support/schema/flow/cda";
import {PAGES} from "../../../../../support/schema/pages";
import {homeSelectors} from "../../../../../selectors/pages/home";
import {accountSelectors} from "../../../../../selectors/pages/account";

let flow = {
  name: 'NO Cliente NO actualizado NO enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.NO_CLIENT_PAYROLL,
    PHASE.CDA.FINAL
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.NO_UPDATED,
    insurance: INSURANCE.YES,
    channels: READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.FALSE
  },
  pages: [
    {
      page: PAGES.ACCOUNT,
      branch: {
        trigger: accountSelectors.form.nextPage.payrollWithoutAgreement,
        data: {
          payrollWithoutAgreement: 0
        }
      },
    }
  ]
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

