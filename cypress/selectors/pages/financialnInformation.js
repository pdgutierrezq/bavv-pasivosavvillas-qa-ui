var financialInformationSelectors = {
  form: {
    input: {
      activeExpensesInput: '#activeExpensesInput',
      passiveExpensesInput: '#passiveExpensesInput',
      monthlyExpensesInput: '#monthlyExpensesInput',
      monthlyIncomeInput: '#monthlyIncomeInput',
    },
    type: {
      operation: 'mat-select',
    },
    radioValue: {
      fiscalManager: 'mat-radio-button',
    },
    nextPage: {
      continue: '#SubmitContactInformationForm'
    }
  }
}

export {financialInformationSelectors};
