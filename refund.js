'use strict';
const PAYPAY = require('@paypayopa/paypayopa-sdk-node');
PAYPAY.Configure({
    clientId: 'a_Ge4Gs0GwPe_Nhrr',
    clientSecret: 'MGaiN/iEvfQCiH4evdABb3bJiB4LchYSKSDr4veoiNw=',
    merchantId: '885063022314512384',
    /* production_mode : Set the connection destination of the sandbox environment / production environment.
 The default false setting connects to the sandbox environment. The True setting connects to the production environment. */
    productionMode: false,
  });
 let payload = {
    merchantRefundId: 'Mp7V7qJEGWShIWk0KLgyoBjjE913_20250330151050', // PaymanetID
    paymentId: '04674380644348764160', // OrdeerID
    amount: {
      amount: 1000,
      currency: 'JPY',
    },
    reason: 'test refund',
  };
// Calling the method to refund a Payment
PAYPAY.PaymentRefund(payload, (response) => {
    // Printing if the method call was SUCCESS
    console.log(response.BODY.resultInfo.code);
  });

// node refund.jsで実行
