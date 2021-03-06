import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout
              name="ReactMail"
              description="$10/5 Email Campaigns"
              amount = {1000}
              token = {token => this.props.handleToken(token)}
              stripeKey = {process.env.REACT_APP_STRIPE_KEY}
              bitcoin = {true}
              
            >
              <a className="btn-flat">
                Add Credit
              </a>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);