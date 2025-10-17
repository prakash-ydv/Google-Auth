import axios from "axios";

async function loginUsingGoogle(code) {
  try {
    const response = await axios.post("http://localhost:8080/auth/login", {
      code,
    });

    console.log("Login successful:", response.data);
    return response.data;
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    throw err;
  }
}

export default loginUsingGoogle;
