var personalInformationSelectors = {
  form: {
    input: {
      birthCity: '#BirthCity',
      expeditionCity: '#IdCity',
    },
    calendar:{
      birthDate: '#PersonalInformationForm > div:nth-child(1) > span',
      expeditionDate: '#PersonalInformationForm > div:nth-child(5) > span',
    },
    radio:{
      male:'.mat-radio-button:contains("Masculino")',
      female:'.mat-radio-button:contains("Femenino")',
    },
    nextPage: {
      continue: '#PersonalInformationSubmitButton'
    }
  }
}

export {personalInformationSelectors};
