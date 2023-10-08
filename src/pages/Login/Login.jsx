import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Sign in user with Google
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error(error);
      toast.error("Google Sign-In failed. Please try again later.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      // Sign in user with email and password
      await signIn(email, password);
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your email and password.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="mb-8 p-4">
      <ToastContainer />
      <h1 className="text-5xl font-bold text-center">Please Login!</h1>
      <form
        onSubmit={handleEmailPasswordLogin}
        className="md:w-2/4 lg:w-1/3 mx-auto mt-4"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary normal-case text-base font-semibold">
            Continue with email/password
          </button>
        </div>
      </form>
      <div className="mt-4 mb-2 text-center">Or,</div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline normal-case" onClick={handleGoogleLogin}>
        <FaGoogle></FaGoogle>Login with Google
        </button>
      </div>
      <p className="text-center mt-4">
        Don't have an account? Please{" "}
        <Link className="text-blue-700 font-medium underline" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
