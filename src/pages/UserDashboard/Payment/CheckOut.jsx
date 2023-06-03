import { useState } from "react"
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';


const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        if (error) {
            setCardError(error.message)
        }
        else{
            setCardError("")
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='myBtn' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className="mt-5 text-red-600 font-semibold">{cardError}</p>
            }
        </section>
    );
};

export default CheckOut;