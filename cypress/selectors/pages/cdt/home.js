import {RECAPTCHA_SERVICE} from "../../../support/model/services/security/recaptcha";

var cdtHomeSelectors = {
  form: {
    input: {
      amount: '#Amount',
      term: {
        selector: '#Term',
        interceptors: RECAPTCHA_SERVICE
      }
    },
    loader: {
      waitLoader: ''
    },
    nextPage: {
      continue: '.avv-btn-primary'
    }
  }
}

export {cdtHomeSelectors};
