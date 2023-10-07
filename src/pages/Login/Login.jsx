import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      // Sign in user
      const result = await signIn(email, password);
      console.log(result.user);
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        toast.error("Wrong password. Please try again.", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else if (error.code === "auth/user-not-found") {
        toast.error("Email doesn't match any account. Please check your email and try again.", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        console.error(error);
        toast.error("Login failed. Please try again later.", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  return (
    <div className="mb-8 p-4">
      <ToastContainer />
      <h1 className="text-5xl font-bold text-center">Please Login!</h1>
      <form onSubmit={handleLogin} className="md:w-2/4 lg:w-1/3 mx-auto mt-4">
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
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary normal-case text-base font-semibold">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">Don't have an account <Link className="text-blue-700 font-medium underline" to='/register'>Register</Link></p>
    </div>
  );
};

export default Login;
