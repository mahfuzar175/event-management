import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, photo, password);

    try {
      // create user
      const result = await createUser(email, password);
      console.log(result.user);
      toast.success("Registration successful!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again later.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="mb-8 p-4">
        <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <form onSubmit={handleRegister} className="md:w-2/4 lg:w-1/3 mx-auto mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary normal-case text-base font-semibold">
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? Go to{" "}
          <Link className="text-blue-700 font-medium underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
