import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {

  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { ImEnter } from "react-icons/im";

const Login = () => {
  const successToast = () => toast.success("User Logged In Successfully");
  const errorToast = () => toast.error("User log in Unsuccessful !");
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passErrorToast = (toastText) => toast.error(toastText);
  const { logIn, user, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  if (user || loading) {
    return;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      passErrorToast("Length must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      passErrorToast("Must have an Uppercase letter in the password");
      return;
    } else if (!/[a-z]/.test(password)) {
      passErrorToast("Must have a Lowercase letter in the password");
      return;
    }
    logIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/login");
        setSuccess("User Logged in Successfully");
        successToast();
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User Login Unsuccessful !");
      });
  };
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    setRegisterError("");
    setSuccess("");
    signInWithPopup(auth, provider)
      .then(() => {
        successToast();
        setSuccess("User Logged In Successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User Login Unsuccessful !");
      });
  };
  return (
    <div className=" flex flex-col justify-center items-center mx-auto">
      <div className="w-full dark:invert bg-[url('/register.jpg')] bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center"></div>
      <div className="bg-white dark:bg-gray-400 pb-5 rounded-lg shadow-md md:w-2/4 w-96 mx-auto">
        <div className="min-h-60 bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold flex items-center gap-2">Log In <ImEnter className="animate-pulse" /> </h2>
        </div>
        <form className="md:max-w-lg mx-auto" onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md"
            />
            <span
              className="cursor-pointer text-2xl absolute right-5 bottom-2 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEyeSlash></FaRegEyeSlash>
              ) : (
                <FaRegEye></FaRegEye>
              )}
            </span>
          </div>
          <button
            type="submit"
            className="bg-gray-500 text-white btn w-full glass rounded-3xl hover:bg-gray-800"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-center gap-4 my-2">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className=" btn text-red-800 border-red-500 text-xl py-2 px-4 rounded-md"
          >
            <FaGoogle></FaGoogle>
          </button>
        </div>
        {registerError && (
          <p className="my-2 text-sm text-red-800">{registerError}</p>
        )}
        {success && <p className="my-2 text-sm text-green-700">{success}</p>}
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don&apos;t have an account?{" "}
          <Link to={"/register"} className="text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
