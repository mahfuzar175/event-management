
const AboutUs = () => {
  return (
    <section className="mt-2">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div data-aos="fade-left" data-aos-duration="2000"><img
            src="https://i.ibb.co/28rVtVn/manager.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          /></div>
          <div data-aos="fade-right" data-aos-duration="2000">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-700 mb-8">
              Welcome to <span className="font-bold">FestiveHub</span>, where we
              turn ordinary events into extraordinary experiences. With a team
              of passionate and dedicated professionals, we specialize in
              creating memorable and seamless events for our clients. Whether
              it's a wedding, Birthday Parties, Anniversaries, Engagement
              Parties, Retirement Parties, Baby Shower or any special occasion,
              we handle every detail with precision and creativity.
            </p>
            <div className="text-xl font-semibold mb-4">Meet Our Team</div>
            <ul className="list-disc pl-8">
              <li>John Doe - Event Planner</li>
              <li>Jane Smith - Decor Specialist</li>
              <li>Michael Johnson - Catering Expert</li>
              <li>Emily Davis - Entertainment Coordinator</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
