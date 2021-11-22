const {homeSelectors} = require("../../selectors/pages/home");
const {basicInformationSelectors} = require(
    "../../selectors/pages/informationBasic");
const {pepSelectors} = require("../../selectors/pages/pep");
const PAGES = {
  HOME: {
    name: "homePage",
    fixture: "flow/pages/home",
    selector: homeSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  BASIC_INFORMATION: {
    name: "basicInformationPage",
    fixture: "flow/pages/information_basic",
    selector: basicInformationSelectors.form.nextPage.continue,
    status: {
      pause: true,
      screenshot: false
    }
  },
  PEP: {
    name: "pepPage",
    fixture: "flow/pages/pep",
    selector: pepSelectors.form.nextPage.continue,
    status: {
      pause: true,
      screenshot: false
    }
  }
}

module.exports = {
  PAGES
};
