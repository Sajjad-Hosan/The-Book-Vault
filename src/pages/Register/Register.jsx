import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
  const successToast = () => toast.success("User created Successfully");
  const errorToast = () => toast.error("User creation Unsuccessful !");
  const passErrorToast = (toastText) => toast.error(toastText);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleLogIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      passErrorToast("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      passErrorToast("Password must contain an uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      passErrorToast("Password must contain a lowercase letter.");
      return;
    }

    createUser(email, password, name, photoURL)
      .then(() => {
        setSuccess("User created successfully!");
        successToast();
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast();
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        Swal.fire({
          title: "Registered!",
          text: "You've successfully registered.",
          icon: "success"
        });
        navigate('/')

      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops !",
          text: error.massage,
        });
      })
  };

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-500 p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6">Register</h1>
      <form className="w-full" onSubmit={handleRegister}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-lg font-medium mb-2">Photo URL:</label>
          <input
            type="text"
            id="photoURL"
            name="photoURL"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-lg font-medium mb-2">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <span
            className="absolute right-4 top-3 cursor-pointer text-2xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600"
        >
          Register
        </button>
      </form>

      <button onClick={handleGoogleLogIn} className="btn bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 w-full my-4">Google</button>


      {/* Error and success messages */}
      {registerError && <p className="mt-4 text-red-600">{registerError}</p>}
      {success && <p className="mt-4 text-green-600">{success}</p>}

      {/* Login Link */}
      <p className="mt-6 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-red-500 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Register;
