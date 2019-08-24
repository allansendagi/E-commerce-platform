import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_XYozvx6n5p5J6sn7XlCzgCdb'

	const onToken = token => {
		console.log(token);
		alert('payment successful');
	}

	return (
		<StripeCheckout
		  label='pay Now'
		  name='CRWN Clothing Ltd.'
		  billingAddress
		  shippingAddress
		  image='https://res.cloudinary.com/allansendagi-com/image/upload/v1566664176/project/4.1_favicon.ico_i7ssox.ico'
		  description={`Your total is $${price}`}
		  amount={priceForStripe}
		  panelLabel='pay Now'
		  token={onToken}
		  stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

