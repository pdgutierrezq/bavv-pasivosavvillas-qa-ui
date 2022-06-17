import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {
  CONDITION
} from "../../../../../support/model/entities/properties/customer/conditions";
import {BRANCH} from "../../../../../support/schema/branch";

let flow = {
  name: 'Cliente NO actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.PRODUCT.DEFAULT,
    PHASE.IDENTIFICATION,
    PHASE.CDA.SETUP.CLIENT.YES,
    PHASE.CDA.SUMMARY
  ],
  mocks: {
    condition: CONDITION.CLIENT.NO_UPDATED
  },
  braches: [
    BRANCH.PRODUCT.DEPOSIT,
    BRANCH.CARD.CLIENT.YES.DEPOSIT
  ]
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

