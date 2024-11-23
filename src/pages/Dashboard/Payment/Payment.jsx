
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../components/SectionTitle";
import { useParams } from "react-router-dom";
import useGet from "../../../hooks/useGet";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
const packageId = useParams();
const [data] = useGet(`/booking/${packageId}`)
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm package={data}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
