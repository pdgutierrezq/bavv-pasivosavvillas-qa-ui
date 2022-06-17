import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {
  ACCOUNTS
} from "../../../../../support/model/entities/properties/customer/accounts";
import {BRANCH} from "../../../../../support/schema/branch";

let flow = {
  name: 'Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.PRODUCT.DEFAULT,
    PHASE.IDENTIFICATION,
    PHASE.CDA.SETUP.CLIENT.YES,
    PHASE.CDA.SUMMARY
  ],
  mocks: {
    account: ACCOUNTS.CAT.YES
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

