import {FLOW} from "../../../../../../../../../support/schema/flow";
import user from "../../../../../../../../../support/schema/user";

let flow = FLOW.CLIENT.UPDATED.INSURANCE.YES

describe(user.APP.CDA, function () {
  it(flow.name, function () {
    cy.executeFlow(flow)
  })
})

