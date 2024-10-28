import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Hero,
  Intro,
  Laurels,
  SpecialMenu,
} from "./sections/index";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="padding-y">
      <Hero />
    </section>
    <section className="padding">
      <AboutUs />
    </section>
    <section className="padding">
      <SpecialMenu />
    </section>
    <section className="padding">
      <Chef />
    </section>
    <section className="padding">
      <Intro />
    </section>
    <section className="padding">
      <Laurels />
    </section>
    <section className="padding">
      <Gallery />
    </section>
    <section className="padding">
      <FindUs />
    </section>
    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;
