const {CDT} = require("../../../../support/schema/flow/cdt");
const {PHASE} = require("../../../../support/schema/phase");
const {CONDITION} = require(
    "../../../../support/model/entities/properties/customer/conditions");
const {PAGES} = require("../../../../support/schema/pages");

let flow = {
  name: 'NO Cliente actualizado enrolado',
  phases: [
    PHASE.CDT.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDT.NO_CLIENT,
    PHASE.CDT.FINAL
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.UPDATED,
  },
  pages: [
    {
      page: PAGES.CDT_ACCOUNT_CONFIG,
      data: {
        source: "Desde otro banco",
        pickUpAtOffice: "Recoger en cualquier oficina AV Villas",
        continue: 0
      }
    }
  ]
}

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

