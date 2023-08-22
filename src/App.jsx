import {
  Hero, Popular, Super, Service, SpecialOffer, CustomerReviews, Subscribe, Footer
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <Popular/>
    </section>
    <section className="padding">
      <Super/>
    </section>
    <section className="padding-x py-10">
      <Service/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="padding bg-blue-50 ">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8 text-white">
      <Footer/>
    </section>
  </main>
);

export default App;