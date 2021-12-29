const {CDT} = require("../../../../support/schema/flow/cdt");
const {PHASE} = require("../../../../support/schema/phase");
const {PAGES} = require("../../../../support/schema/pages");

let flow = {
  name: 'Cliente actualizado enrolado',
  phases: [
    PHASE.CDT.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDT.FINAL
  ],
  mocks: {},
  pages: [
    {
      page: PAGES.CDT_ACCOUNT_CONFIG,
      data: {source: "Desde otro banco"}
    }
  ]
}

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

