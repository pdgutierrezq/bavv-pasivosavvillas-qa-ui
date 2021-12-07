var basicInformationSelectors = {
  form: {
    input: {
      identification: '#DNINumber',
      mobileNumber: '#MobileNumber',
      mobileNumberConfirmation: '#MobileConfirmNumber',
      firstName: '#FirstName',
      secondName: '#SecondName',
      lastName: '#LastName',
      secondLastName: '#SecondLastName',
      monthlyIncome: '#MonthlyIncomeInput',
    },
    checkbox: {
      authorization: '#CheckHabeasData'
    },
    waitEvent: {
      recaptcha: '.div.rc-anchor-logo-large'
    },
    nextPage: {
      continue: '#SubmitFormUserIdentification'
    }
  }
}

export {basicInformationSelectors};
