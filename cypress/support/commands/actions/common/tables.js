import {backend} from "../../../../../a.cypress.ll/selectors/common/backend";

Cypress.Commands.add("validateTableEqual", (tableSelector, expected) => {
    cy.get(tableSelector)
        .getTable()
        .should((tableData) => {
            expect(tableData).to.deep.equal(expected);
        });
});

Cypress.Commands.add(
    "validateTableEqualInAnyOrder",
    (tableSelector, expected) => {
        cy.get(tableSelector)
            .getTable()
            .should((tableData) => {
                expect(tableData).to.deep.equalInAnyOrder(expected);
            });
    }
);

Cypress.Commands.add("validateTableInclude", (tableSelector, expected) => {
    cy.get(tableSelector)
        .getTable()
        .should((tableData) => {
            expected.forEach((item) => expect(tableData).to.deep.include(item));
        });
});

Cypress.Commands.add(
    "validateTableIncludeSomeColumns",
    (tableSelector, expected) => {
        cy.get(tableSelector)
            .getTable({onlyColumns: Object.keys(expected)})
            .should((tableData) => {
                expect(tableData).to.deep.include(expected);
            });
    }
);

Cypress.Commands.add("validateEmptyTable", (tableSelector) => {
    cy.get(tableSelector)
        .getTable()
        .should((tableData) => {
            expect(tableData).to.be.empty;
        });
});

Cypress.Commands.add("validateTableSize", (tableSelector, size) => {
    cy.get(tableSelector)
        .getTable()
        .should((tableData) => {
            expect(tableData).length(size);
        });
});

Cypress.Commands.add("filterAndSelect", (columnValue) => {
    cy.get(backend.widget.headerInputSearch).clear().type(columnValue);
    cy.contains("span", columnValue).should("be.visible").click();
});

Cypress.Commands.add("filterAndDelete", (columnValue) => {
    cy.get('[data-testid="widget-header_input_search"]')
        .clear()
        .type(columnValue);
    cy.get('[data-testid="tr_i_delete-row"]').first().click();
});

Cypress.Commands.add("searchAndSelectItemUsingPagination", (name) => {
    let rowName = "";
    let founded = false;

    cy.get("body").then(($pagination) => {
        if ($pagination.find("td:nth-child(1)").length > 0) {
            cy.get("td:nth-child(1)").each((td) => {
                rowName = td.text();

                if (name == rowName) {
                    founded = true;
                    cy.contains(name).click();
                }
            }).then(() => {
                if (! founded) {
                    cy.get(".fa.fa-angle-right").scrollIntoView().click();
                    cy.searchAndSelectItemUsingPagination(name);
                }
            });
        } else {
            cy.contains(name).click();
        }
    });
});

Cypress.Commands.add("selectFirstItem", (name) => {
    cy.get("td:nth-child(1)").get('td').first().click()
});

Cypress.Commands.add("getColumnFromTable", (column) => {
    cy.contains("th", column)
        .invoke("index")
        .then((index) => {
            cy.wrap(index);
        });
});

Cypress.Commands.add("sortColumn", (columnName) => {
    cy.contains("th", columnName).should("be.visible").click();
});

Cypress.Commands.add("waitUntilItemIsReady", (itemName) => {
    cy.get(backend.table.tableBody).then(() => {
        cy.contains(itemName).should("be.visible");
    });
});

Cypress.Commands.add("validateReasonCode", (name) => {
    let rowReason = "";
    let foundedReason = false;

    cy.get("td:nth-child(1)").each((td) => {
        rowReason = td.text();
        if (name == rowReason) {
            foundedReason = true;
            cy.contains("td", name);
        }
    }).then(() => {
        if (! foundedReason) {
            cy.searchAndSelectItemUsingPagination(name);
        }
    });
});
