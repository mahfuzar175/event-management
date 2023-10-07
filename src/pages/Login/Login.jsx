import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = e =>{
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      console.log(form);
  }

  return (
    <div className="mb-8 p-4">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
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
