import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {PAGES} from "../../../../../support/schema/pages";

let flow = {
  name: 'Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.FINAL
  ],
  mocks: {},
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

