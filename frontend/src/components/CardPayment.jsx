// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";



// const CardPayment = () => {
//   const navigate = useNavigate();
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: "",
//     cardHolderName: "",
//     expiryDate: "",
//     cvv: "",
//     amount: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     const { cardNumber, cardHolderName, expiryDate, cvv, amount } = paymentDetails;
//     if (!cardNumber || !cardHolderName || !expiryDate || !cvv || !amount) {
//       alert("Please fill in all the details.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post("http://localhost:5000/api/card-payment", paymentDetails);
//       alert("Payment successful!");
//       navigate("/register");
//     } catch (error) {
//       console.error(error);
//       alert("Payment failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center"
//       style={{ backgroundColor: "#caf0f6" }}
//     >
//         <div className="absolute top-28 left-6">
//         <button onClick={() => navigate("/register")} className="p-2 rounded-full bg-[#03045e] text-white hover:bg-opacity-90">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//       </div>
//       <main>
        
//       </main>
//       <motion.form
//         onSubmit={handlePayment}
//         className="bg-[#475492] text-white p-6 rounded-lg shadow-lg max-w-md w-full"
//         initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//       >
//         <h1
//           className="text-3xl font-bold text-center mb-6"
//           style={{ color: "#caf0f6" }}
//         >
//           Card Payment
//         </h1>

//         {/* Card Number */}
//         <div className="mb-4">
//           <label
//             htmlFor="cardNumber"
//             className="block font-semibold mb-2"
//             style={{ color: "#caf0f6" }}
//           >
//             Card Number
//           </label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={paymentDetails.cardNumber}
//             onChange={handleChange}
//             placeholder="1234 5678 9012 3456"
//             className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
//             style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
//           />
//         </div>

//         {/* Cardholder Name */}
//         <div className="mb-4">
//           <label
//             htmlFor="cardHolderName"
//             className="block font-semibold mb-2"
//             style={{ color: "#caf0f6" }}
//           >
//             Cardholder Name
//           </label>
//           <input
//             type="text"
//             id="cardHolderName"
//             name="cardHolderName"
//             value={paymentDetails.cardHolderName}
//             onChange={handleChange}
//             placeholder="John Wick"
//             className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
//             style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
//           />
//         </div>

//         {/* Expiry Date and CVV */}
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label
//               htmlFor="expiryDate"
//               className="block font-semibold mb-2"
//               style={{ color: "#caf0f6" }}
//             >
//               Expiry Date
//             </label>
//             <input
//               type="text"
//               id="expiryDate"
//               name="expiryDate"
//               value={paymentDetails.expiryDate}
//               onChange={handleChange}
//               placeholder="MM/YY"
//               className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
//               style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="cvv"
//               className="block font-semibold mb-2"
//               style={{ color: "#caf0f6" }}
//             >
//               CVV
//             </label>
//             <input
//               type="password"
//               id="cvv"
//               name="cvv"
//               value={paymentDetails.cvv}
//               onChange={handleChange}
//               placeholder="***"
//               className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
//               style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
//             />
//           </div>
//         </div>

//         {/* Amount */}
//         <div className="mb-4">
//           <label
//             htmlFor="amount"
//             className="block font-semibold mb-2"
//             style={{ color: "#caf0f6" }}
//           >
//             Amount
//           </label>
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             value={paymentDetails.amount}
//             onChange={handleChange}
//             placeholder="Enter Amount"
//             className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
//             style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
//           />
//         </div>

//         {/* Pay Now Button */}
//         <button
//           type="submit"
//           className={`w-full p-3 rounded-lg font-semibold transition-all duration-200 shadow-md bg-[#262d79] hover:bg-opacity-90 text-[#caf0f6] ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           disabled={loading}
//         >
//           {loading ? "Processing..." : "Pay Now"}
//         </button>
//       </motion.form>
//     </div>
//   );
// };

// export default CardPayment;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";



const CardPayment = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    const { cardNumber, cardHolderName, expiryDate, cvv, amount } = paymentDetails;
    if (!cardNumber || !cardHolderName || !expiryDate || !cvv || !amount) {
      alert("Please fill in all the details.");
      return;
    }



    setLoading(true);
    try {
      // send as form data 
      const formData = new FormData();
      formData.append("cardNumber", paymentDetails.cardNumber);
      formData.append("cardHolderName", paymentDetails.cardHolderName);
      formData.append("expiryDate", paymentDetails.expiryDate);
      formData.append("cvv", paymentDetails.cvv);
      formData.append("amount", paymentDetails.amount);
      await axios.post(
        "http://localhost:5000/api/card-payment",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // end of edit
      alert("Payment successful!");
      navigate("/register");
    } catch (error) {
      console.error(error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#caf0f6" }}
    >
        <div className="absolute top-28 left-6">
        <button onClick={() => navigate("/register")} className="p-2 rounded-full bg-[#03045e] text-white hover:bg-opacity-90">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <main>
        
      </main>
      <motion.form
        onSubmit={handlePayment}
        className="bg-[#475492] text-white p-6 rounded-lg shadow-lg max-w-md w-full"
        initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
      >
        <h1
          className="text-3xl font-bold text-center mb-6"
          style={{ color: "#caf0f6" }}
        >
          Card Payment
        </h1>

        {/* Card Number */}
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block font-semibold mb-2"
            style={{ color: "#caf0f6" }}
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
            style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
          />
        </div>

        {/* Cardholder Name */}
        <div className="mb-4">
          <label
            htmlFor="cardHolderName"
            className="block font-semibold mb-2"
            style={{ color: "#caf0f6" }}
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={paymentDetails.cardHolderName}
            onChange={handleChange}
            placeholder="John Wick"
            className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
            style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="expiryDate"
              className="block font-semibold mb-2"
              style={{ color: "#caf0f6" }}
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>
          <div>
            <label
              htmlFor="cvv"
              className="block font-semibold mb-2"
              style={{ color: "#caf0f6" }}
            >
              CVV
            </label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleChange}
              placeholder="***"
              className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
              style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
            />
          </div>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block font-semibold mb-2"
            style={{ color: "#caf0f6" }}
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleChange}
            placeholder="Enter Amount"
            className="w-full p-3 border border-[#03045e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#caf0f6]"
            style={{ backgroundColor: "#03045e", color: "#caf0f6" }}
          />
        </div>

        {/* Pay Now Button */}
        <button
          
          type="submit"
          className={`w-full p-3 rounded-lg font-semibold transition-all duration-200 shadow-md bg-[#262d79] hover:bg-opacity-90 text-[#caf0f6] ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </motion.form>
    </div>
  );
};

export default CardPayment;

