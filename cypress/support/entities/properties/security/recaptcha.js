const RECAPTCHA = {
  OK: {
    STATUS: 200,
    BODY: 'mock/security/recaptcha/ok.json'
  },
  TIMEOUT: {
    STATUS: 200,
    BODY: 'mock/security/recaptcha/timeout.json'
  },
  LOW_SCORE: {
    STATUS: 200,
    BODY: 'mock/security/recaptcha/low-score.json'
  },
}

module.exports = {
  RECAPTCHA
};
