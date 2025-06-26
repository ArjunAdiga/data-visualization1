import { useEffect, useState } from "react";
import Typography from "../components/Typography";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../assets/Assets";
import { useVariableStore } from "../store/useVariableStore";

const Signin = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(passwordInput);
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleUser = async () => {
    // to run on click of submit
    try {
      await signInWithEmailAndPassword(auth, emailInput, passwordInput); // if user already exists on firebase
      alert("Login successful!");
      setAuth(emailInput, passwordInput);
      navigate("/");
      setEmailInput("");
      setPasswordInput("");
    } catch (e: any) {
      if (e.code === "auth/invalid-credential") {
        try {
          await createUserWithEmailAndPassword(auth, emailInput, passwordInput); // if user isnt created yet
          setAuth(emailInput, passwordInput);
          alert("User created successfully!");
          navigate("/");
          setEmailInput("");
          setPasswordInput("");
        } catch (createError: any) {
          console.log("Error while creating user", createError);
          alert("Error while creating user");
        }
      } else {
        alert("Error while signing user");
      }
    }
  };

  const handleGoogleLogin = async () => {
    // handling user on click of google authentication
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      if (user && user.email) {
        useAuthStore.getState().setAuth(user.email, ""); // saving user email in state management
        navigate("/");
      }
    } catch (err) {
      console.error("Google login failed", err);
    }
  };
  const logout = useAuthStore((state) => state.clearAuth);
  const clearSelected = useVariableStore((state) => state.clearSelected);
  useEffect(() => {
    logout();
    clearSelected();
  }, []);

  return (
    <>
      <div className="grid gap-6 mb-2 bg-gray-500 p-6  ">
        <Typography variant="h1">Sign In</Typography>
        <div>
          <label
            htmlFor="email"
            className="text-white flex mb-2 align-center text-sm font-medium  dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-yellow dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Enter Valid Email"
            required
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-white flex mb-2 align-center text-sm font-medium  dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-yellow dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Enter Valid Password with mixture of capital,small alphabets and number of length 8"
            required
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={() => handleUser()}
            className="text-white flex items-center justify-center  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[90px]  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            disabled={!isEmailValid || !isPasswordValid}
          >
            Submit
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 flex-col">
          <label className="text-white flex  align-center text-sm font-medium  dark:text-white">
            Sign In with google
          </label>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleGoogleLogin()}
          >
            <GoogleIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
