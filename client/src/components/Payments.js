import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout
              name="ReactMail"
              description="$10/5 Email Campaigns"
              amount = {1000}
              token = {token => console.log(token)}
              stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
              <a className="btn-flat">
                Add Credit
              </a>
            </StripeCheckout>
        );
    }
}

export default Payments;