import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {CONDITION} from "../../../../../support/model/entities/properties/customer/conditions";
import {PAGES} from "../../../../../support/schema/pages";

let flow = {
  name: 'NO Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.NO_CLIENT,
    PHASE.CDA.FINAL_DEPOSIT
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.UPDATED,
  },
  pages: [
    {
      page: PAGES.ACCOUNT,
      data: {
        account: false,
        deposit: true,
        continue: 0
      }

    }
  ]
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

