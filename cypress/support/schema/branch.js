const {PAGES} = require("./pages");
const {accountSelectors} = require("../../selectors/pages/account");
const {cardSelectors} = require("../../selectors/pages/card");

const BRANCH = {
  PRODUCT: {
    DIGITAL_ACCOUNT: {
      page: PAGES.ACCOUNT,
      branch: {
        trigger: accountSelectors.form.nextPage.account,
        data: {
          account: 0
        }
      }
    },
    DEPOSIT: {
      page: PAGES.ACCOUNT,
      branch: {
        trigger: accountSelectors.form.nextPage.deposit,
        data: {
          deposit: 0
        }
      }
    },
    PAYROLL_WITHOUT_AGREEMENT: {
      page: PAGES.ACCOUNT,
      branch: {
        trigger: accountSelectors.form.nextPage.payrollWithoutAgreement,
        data: {
          payrollWithoutAgreement: 0
        }
      }
    },
    PAYROLL: {
      page: PAGES.ACCOUNT,
      branch: {
        trigger: accountSelectors.form.nextPage.payroll,
        data: {
          payroll: 0
        }
      }
    }
  },
  CARD: {
    CLIENT: {
      YES: {
        ACCOUNT: {
          page: PAGES.CARD,
          branch: {
            trigger: cardSelectors.form.nextPage.continue,
            data: {
              authTransport: true,
              authFourByMil: true,
              continue: 0,
            }
          }
        },
        DEPOSIT: {
          page: PAGES.CARD,
          branch: {
            trigger: cardSelectors.form.nextPage.continue,
            data: {
              authTransport: true,
              continue: 0,
            }
          },
        }
      },
      NO: {
        DEPOSIT: {
          page: PAGES.CARD,
          branch: {
            trigger: cardSelectors.form.nextPage.continue,
            data: {
              city: "bogo{downarrow}{enter}",
              neighborhood: "Colina",
              address: "Cll 159 # 24 -36",
              authTransport: true,
              continue: 0,
              acceptChangeDelivery: 0
            }
          },
        }
      }
    }
  },
  CONTACT_INFORMATION: {
    CLIENT: {
      YES: {
        UPDATED: {
          NO: {
            page: PAGES.CONTACT_INFORMATION,
            branch: {
              data:
                  {
                    email: "mail@mail.com",
                    emailConfirmation: "mail@mail.com",
                    mobileNumber: "6776655",
                    companyName: "adltestpasivo",
                    workPhone: "6677990",
                    workAddress: "direccion de prueba empresa",
                    workCity: "bogo{downarrow}{enter}",
                    continue: 0
                  }
            },
          }
        }
      }
    },
    PAYROLL: {
      CLIENT: {
        YES: {
          page: PAGES.CONTACT_INFORMATION,
          branch: {
            data: {
              email: "mail@mail.com",
              emailConfirmation: "mail@mail.com",
              mobileNumber: "6776655",
              companyName: "adltestpasivo",
              companyNit: "8600358275",
              workPhone: "6677990",
              workAddress: "direccion de prueba empresa",
              workCity: "bogo{downarrow}{enter}",
              continue: 0
            }
          },
        },
        NO: {
          page: PAGES.CONTACT_INFORMATION,
          branch: {
            data: {
              email: "mail@mail.com",
              emailConfirmation: "mail@mail.com",
              mobileNumber: "6776655",
              homeAddress: "direccion de envio de tarjeta",
              neighborhood: "adlBarriotest",
              city: "bogo{downarrow}{enter}",
              companyName: "adltestpasivo",
              companyNit: "8600358275",
              workPhone: "6677990",
              workAddress: "direccion de prueba empresa",
              workCity: "bogo{downarrow}{enter}",
              continue: 0
            }
          },
        }
      }
    }
  }
}

module.exports = {
  BRANCH
};
