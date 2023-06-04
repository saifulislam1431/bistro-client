import React from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from './CheckOut';
import useCart from '../../../Hooks/useCart';

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_PK}`)
const Payment = () => {
    const [cart] = useCart();
    console.log(stripePromise);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseInt(total.toFixed(2))
    return (
        <section>
            <div className='my-16'>
                <SectionComponent
                    heading="Payment"
                    subHeading="Please Process"
                ></SectionComponent>
            </div>

            <Elements stripe={stripePromise}>
                <CheckOut price={price} cart={cart}></CheckOut>
            </Elements>
        </section>
    );
};

export default Payment;