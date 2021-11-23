var cardSelectors = {
  form: {
    input:{
      city:'#DeliveryCity',
      neighborhood:'#DeliveryNeighborhood',
      address:'#DeliveryAddress',
    },
    checkbox: {
      authTransport: '#CheckMassiveTransport',
      auth4ByMil: '#ExemptAccountCheck'
    },
    nextPage: {
      continue: '#DeliveryAddressButton'
    }
  }
}

var confirmDevileryAddressPopupSelectors = {
  form: {
    nextPage: {
      acceptChangeDelivery: '#AcceptChangeDeliveryAddressButton',
      rejectChangeDelivery: '#CancelChangeDeliveryAddressButton'
    }
  }
}

export {cardSelectors,confirmDevileryAddressPopupSelectors};
