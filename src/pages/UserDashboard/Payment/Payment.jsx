import React from 'react';
import SectionComponent from '../../Shared/SectionComponent/SectionComponent';
import { loadStripe } from '@stripe/stripe-js';
import{Elements} from '@stripe/react-stripe-js';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)
const Payment = () => {
    return (
        <section>
            <div className='my-16'>
            <SectionComponent
            heading="Payment"
            subHeading="Please Process"
            ></SectionComponent>
            </div>

            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>
        </section>
    );
};

export default Payment;