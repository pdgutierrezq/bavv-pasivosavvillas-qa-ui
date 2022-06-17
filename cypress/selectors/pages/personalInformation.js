var personalInformationSelectors = {
  form: {
    cda: {
      input: {
        birthCity: '#BirthCity',
        expeditionCity: '#IdCity',
        birthDateDay: '#mat-input-16',
        birthDateYear: '#mat-input-17',
        expeditionDateDay: '#mat-input-19',
        expeditionDateYear: '#mat-input-20'
      },
      type: {
        birthDateMonth: '.mat-select:first',
        expeditionDateMonth: '.mat-select:last',
      },
      radio: {
        male: '.mat-radio-button:contains("Masculino")',
        female: '.mat-radio-button:contains("Femenino")',
      },
      nextPage: {
        continue: '#PersonalInformationSubmitButton'
      }
    },
    cdt: {
      input: {
        birthCity: '#BirthCity',
        expeditionCity: '#IdCity',
        birthDateDay: '#mat-input-19',
        birthDateYear: '#mat-input-20',
        expeditionDateDay: '#mat-input-22',
        expeditionDateYear: '#mat-input-23'
      },
      type: {
        birthDateMonth: '.mat-select:first',
        expeditionDateMonth: '.mat-select:last',
      },
      radio: {
        male: '.mat-radio-button:contains("Masculino")',
        female: '.mat-radio-button:contains("Femenino")',
      },
      nextPage: {
        continue: '#PersonalInformationSubmitButton'
      }
    }

  }
}

export {personalInformationSelectors};
