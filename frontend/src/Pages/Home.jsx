import "./CSS/Home.scss";
import Header from "./Home/Components/Header";
import Footer from "./Home/Components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <h1>Welcome to Construction Co.</h1>
          <p>Your trusted partner in building your dreams.</p>
        </section>
        <section id="services">
          <h2>Our Services</h2>
          <p>
            We offer a wide range of construction services, including
            residential, commercial, and industrial projects.
          </p>
        </section>
        <section id="projects">
          <h2>Our Projects</h2>
          <p>
            Take a look at some of our completed projects that showcase our
            expertise and commitment to quality.
          </p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>
            Get in touch with us for your construction needs. We are here to
            help you every step of the way.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
