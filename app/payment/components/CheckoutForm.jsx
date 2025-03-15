// "use client";

// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useState } from "react";

// const CheckoutForm = () => {
//   const [error, setError] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);
//     if (card == null) {
//       return;
//     }
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       console.log("payment error", error);
//       setError(error.message);
//     } else {
//       console.log("payment method", paymentMethod);
//       setError("");
//     }
//   };
//   return (
//     <div className="max-w-md w-11/12 mx-auto flex flex-col justify-center items-center min-h-screen p-6">
//       <div className="bg-white shadow-xl rounded-sm p-6 w-full">
//         <h2 className="text-lg font-semibold text-gray-700 mb-2">
//           Contact information
//         </h2>
//         <div className="mb-4">
//           <label className="text-gray-500 text-sm mb-1 block">Email</label>
//           <input
//             type="email"
//             value="rakibhossen5403@gmail.com"
//             className="w-full border border-gray-300 rounded-sm p-3 shadow-sm  outline-none"
//             readOnly
//           />
//         </div>

//         <form onSubmit={handleSubmit}>
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">
//             Payment method
//           </h2>
//           <div className="border border-gray-300 p-3 rounded-sm shadow-sm mb-4">
//             <label className="text-gray-500 text-sm mb-1 block">
//               Card information
//             </label>
//             <CardElement
//               options={{
//                 style: {
//                   base: {
//                     fontSize: "16px",
//                     color: "#424770",
//                     "::placeholder": { color: "#aab7c4" },
//                   },
//                   invalid: { color: "#9e2146" },
//                 },
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 rounded-sm transition duration-200 shadow-md"
//           >
//             Pay Now
//           </button>
//           <p className="my-3 text-red-500 text-sm">{error}</p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CheckoutForm;

"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const { data: data = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/addToCart");
      return res.data;
    },
  });
  const { data: session, status } = useSession();
  const router = useRouter();
  const totalPrice = data.reduce(
    (total, item) => total + parseInt(item.price),
    0
  );

  //   const amountInCents = (totalPrice + 20) * 100;

  //   console.log(amountInCents);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setLoading(false);
      return;
    }

    try {
      // Dynamic amount calculation (convert to cents)
      const amountInCents = (totalPrice + 20) * 100;

      // Payment Intent Request using axios
      const { data } = await axios.post("/api/payment-intent", {
        amount: amountInCents,
      });

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      // Confirm Payment
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card,
          },
        });

      if (confirmError) {
        setError(confirmError.message);
        toast.error(confirmError.message);
        setLoading(false);
      } else {
        setSuccess(true);
        setError("");
        console.log(paymentIntent);
        await axios.patch("/api/order");
        await axios.delete("http://localhost:3000/api/order");
        console.log("Cart Cleared Successfully!");
        refetch();
        await axios.post("/api/payment-history", {
          userEmail: session?.user?.email || "guest",
          amount: totalPrice + 20,
          paymentIntentId: paymentIntent.id,
          status: paymentIntent.status,
          paymentMethid: "stripe",
          paymentDate: new Date().toISOString().split("T")[0],
        });

        toast.success("Payment Successful! 🎉");
        console.log("Payment history saved successfully!");
      }
    } catch (err) {
      console.error("Payment Error:", err);
      setError("Something went wrong! Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md w-11/12 mx-auto flex flex-col justify-center items-center min-h-screen p-6">
      <div className="bg-white shadow-xl rounded-sm p-6 w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Contact information
        </h2>
        <div className="mb-4">
          <label className="text-gray-500 text-sm mb-1 block">Email</label>
          <input
            type="email"
            value={session?.user?.email}
            className="w-full border border-gray-300 rounded-sm p-3 shadow-sm  outline-none"
            readOnly
          />
        </div>

        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Payment method
          </h2>
          <div className="border border-gray-300 p-3 rounded-sm shadow-sm mb-4">
            <label className="text-gray-500 text-sm mb-1 block">
              Card information
            </label>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#9e2146" },
                },
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black hover:bg-gray-700 text-white font-semibold py-2 rounded-sm transition duration-200 shadow-md"
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>

          {error && <p className="my-3 text-red-500 text-sm">{error}</p>}
          {success && (
            <p className="my-3 text-green-500 text-sm">
              Payment Successful! 🎉
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
