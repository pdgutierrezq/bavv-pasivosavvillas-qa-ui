import {PHASE} from "../../../../../support/schema/phase";
import {CONDITION} from "../../../../../support/model/entities/properties/customer/conditions";
import {CDA_PAYROLL} from "../../../../../support/schema/flow/cdaPayroll";
import {INSURANCE} from "../../../../../support/model/entities/properties/customer/insurance";
import {READE_ACTIVE_CHANNELS_SERVICE} from "../../../../../support/model/services/customer/channels/read";
import {PAGES} from "../../../../../support/schema/pages";

let flow = {
  name: 'NO Cliente NO actualizado NO enrolado SIN seguro',
  phases: [
    PHASE.CDA.INITIAL_PAYROLL,
    PHASE.INSURANCE,
    PHASE.IDENTIFICATION,
    PHASE.CDA.NO_CLIENT_PAYROLL,
    PHASE.CDA.FINAL
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.NO_UPDATED,
    insurance: INSURANCE.NO,
    channels: READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.FALSE
  }
}

describe(CDA_PAYROLL.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA_PAYROLL, flow)
  })
})

