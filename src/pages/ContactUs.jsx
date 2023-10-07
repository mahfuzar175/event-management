const ContactUs = () => {

    const handleSubmit = e =>{
        e.preventDefault();
    }

  return (
    <div>
      <h2 className="text-5xl font-bold text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="md:w-2/4 lg:w-1/3 mx-auto mt-4 mb-6">
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
        <textarea className="w-full border mt-2" name="message" id="" cols="30" rows="10"></textarea>
        <div className="form-control mt-6">
          <button className="btn btn-primary normal-case text-base font-semibold">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
