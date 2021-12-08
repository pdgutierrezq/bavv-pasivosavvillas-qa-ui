var cdtAccountConfigSelectors = {
  form: {
    radio:{
      source:'[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco"):first',
      target:'[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button:contains("Cuenta AV Villas No."):last',
    },
    nextPage: {
      continue: '#SubmitAccountSettingsForm'
    }
  }
}

export {cdtAccountConfigSelectors};
