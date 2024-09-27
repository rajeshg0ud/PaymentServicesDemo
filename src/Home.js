import React, { useEffect, useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { CLIENT_ID } from './config';
import { data } from './user';

function Home() {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [orderIsPaid, setOrderIsPaid] = useState(false);

   const orderPlaced = (details) => {
    console.log("Order placed successfully: ", {
      username: data.userName,
      email: data.email, 
      courseTitle: data.courseTitle,
      transactionId: details.id 
    });
  };

  useEffect(() => {
    const handlePayment = async () => {
      if (!isPending) {
        paypalDispatch({
          type: 'resetOptions',
          value: {
            'client-id': CLIENT_ID,
            currency: 'USD',
          },
        });
        paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
      }
    };

    if (!orderIsPaid) {
      if (!window.paypal) {
        handlePayment();
      }
    }
  }, [isPending, paypalDispatch, orderIsPaid]);

  return (
    <div className='flex flex-col items-center font-bold mt-11'>
      Payment

      {!orderIsPaid && (
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: "10.00",   
                },
              }],
            });
          }}
          onApprove={async (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Transaction completed by ${details.payer.name.given_name}`);
              
               setOrderIsPaid(true);

               orderPlaced(details);
            });
          }}
          onCancel={() => {
            alert("Payment cancelled");
          }}
          onError={(err) => {
            console.error("Payment error:", err);
            alert("An error occurred during the payment.");
          }}
        />
      )}

      {orderIsPaid && (
        <div className='mt-5 text-green-500'>
          Order has been successfully paid
        </div>
      )}
    </div>
  );
}

export default Home;
