import { useState, useEffect, useContext } from "react"
import { useStripe, CardElement, useElements } from '@stripe/react-stripe-js';
import { UserAuth } from "../../../Auth/Auth";
import Swal from "sweetalert2";
import "./CheckOut.css"


const CheckOut = ({ price, cart }) => {
    console.log(price);
    const { user } = useContext(UserAuth)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const [process, setProcess] = useState(false);


    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("access-token")}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: "card",
            card
        });

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError("")
        }
        setProcess(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Unknown",
                    name: user?.displayName || "Anonymous"
                },
            },
        })
        if (confirmError) {
            setCardError(cardError)
        }
        if (paymentIntent?.status === "succeeded") {
            const paymentData = {
                name: user?.displayName,
                email: user?.email,
                price: price,
                transactionId: paymentIntent.id,
                orders: cart.length,
                menuId: cart.map(menuId => menuId.menuId),
                CartItems: cart.map(items => items._id),
                itemName: cart.map(item => item.recipeName),
                date: new Date(),
                orderStatus : "Pending"

            }
            fetch("http://localhost:5000/payment", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("access-token")}`
                },
                body: JSON.stringify(paymentData)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.result.insertedId && data.deletedRes.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: `Payment succeeded with id ${paymentIntent.id}`,
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                })

        }
        setProcess(false)
        console.log(paymentIntent);
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
                <button className='myBtn' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>

            {
                cardError && <p className="mt-5 text-red-600 font-semibold">{cardError}</p>
            }
            {
                process && <progress className="progress progress-primary w-96"></progress>
            }
        </section>
    );
};

export default CheckOut;