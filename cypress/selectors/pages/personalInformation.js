var personalInformationSelectors = {
  form: {
    input: {
      birthCity: '#BirthCity',
      expeditionCity: '#IdCity',
      birthDateDay:'#mat-input-19',
      birthDateYear:'#mat-input-20',
      expeditionDateDay:'#mat-input-22',
      expeditionDateYear:'#mat-input-23'
    },
    type:{
      birthDateMonth:'.mat-select:first',
      expeditionDateMonth:'.mat-select:last',
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
