import axios from "axios";

export const registerRequest = async (formData) => {
  try {
    const response = await axios.post("/v2/customer/register", formData);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const emailVerificationRequest = async (email) => {
  try {
    const response = await axios.post("/v2/customer/send-verification", {
      emailSubject: "OTP Verification",
      email: email,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const otpVerifyRequest = async (RegEmail, OTP_code) => {
  try {
    const response = await axios.get(
      `/v2/customer/auth/verify?email=${RegEmail}&otp=${OTP_code}`
    );
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};
export const loginRequest = async (reqBody) => {
  try {
    const response = await axios.post("v2/customer/login", reqBody);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};
