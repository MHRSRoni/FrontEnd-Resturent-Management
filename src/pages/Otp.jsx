import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import axios from "axios";

const Otp = () => {
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const handleOtpChange = (e, index) => {
    const input = e.target.value.replace(/\D/g, "");
    const updatedOtp = [...otpDigits];
    updatedOtp[index] = input;
    setOtpDigits(updatedOtp);
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otpDigits.join("").trim() === "") {
      alert("Please enter the OTP before verifying.");
      return;
    }

    try {
      const email = localStorage.getItem("userEmail");
      const otp = otpDigits.join("");

      const response = await axios.get(
        `https://kachchi-palace-api-v1.onrender.com/api/v2/customer/auth/verify?email=${email}&otp=${otp}`
      );

      if (response.data.status === "Success") {
        alert("OTP Verification Successful");
        navigate("/login");
      } else {
        alert("OTP Verification Failed. Please check the OTP and try again.");
      }

      console.log(response);
    } catch (error) {
      console.error(error);
      alert("An error occurred while verifying OTP. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 py-10">
      <div className="w-4/5 sm:w-1/3 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow">
        <h2 className="block mb-2 mt-4 text-center text-2xl font-medium text-gray-900">
          OTP
        </h2>
        <div className="w-32 mx-auto h-0.5 mb-5 mt-0 bg-orange-300"></div>
        <form>
          <div className="mb-6 px-4">
            <h2 className="block mb-2 text-sm text-center font-medium text-gray-800">
              Enter OTP
            </h2>

            <div className="flex space-x-2 mt-8">
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                />
              ))}
            </div>
          </div>

          <div className="mb-8 px-4 text-center">
            <Button
              className=""
              variant="basic"
              size="normal"
              type="button"
              text="Verify"
              onClick={handleVerify}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Otp;
