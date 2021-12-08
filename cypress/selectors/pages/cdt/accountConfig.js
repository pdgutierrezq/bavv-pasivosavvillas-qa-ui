var cdtAccountConfigSelectors = {
  form: {
    radio:{
      source:'[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco"):first',
      target:'[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button:contains("Cuenta AV Villas No."):last',
      // target:'[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button:contains("Cuenta AV Villas")>label:nth-child(1)',
    },
    nextPage: {
      continue: '#SubmitAccountSettingsForm'
    }
  }
}

export {cdtAccountConfigSelectors};
