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
    button: {
      confirm: '#SubmitFormUserIdentification'
    },
    nextPage: {
      confirm: '#SubmitFormUserIdentification'
    }
  }
}

export {basicInformationSelectors};
