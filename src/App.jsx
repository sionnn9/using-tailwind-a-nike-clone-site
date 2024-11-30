import Hero from "./sections/hero";
import CustomerReview from "./sections/customerReview";
import Footer from "./sections/footer";
import PopularProducts from "./sections/popularProducts";
import Services from "./sections/services";
import SpecialOffer from "./sections/specialOffer";
import Subscribe from "./sections/subscribe";
import SuperQuality from "./sections/superQuality";
import Nav from "./components/nav";
import Sidebar from "./components/sidebar";

const App = () => (
  <main className={"relative"}>
    <Nav />
    <Sidebar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />{" "}
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReview />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full ">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
