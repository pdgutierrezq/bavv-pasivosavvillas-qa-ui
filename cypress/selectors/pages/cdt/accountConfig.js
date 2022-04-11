var cdtAccountConfigSelectors = {
  form: {
    radioOption:{
      source:'[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button',
      target:'[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button',
      pickUpAtOffice:'[formcontrolname="accountSettingSecondGroup"]>div>.mat-radio-button',
    },
    nextPage: {
      continue: '#SubmitAccountSettingsForm'
    }
  }
}

export {cdtAccountConfigSelectors};
