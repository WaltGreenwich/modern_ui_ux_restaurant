import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./sections";
import Navbar from "./components/Navbar";

const App = () => (
  <main>
    <Navbar />
    <section>
      <Header />
    </section>
    <section>
      <AboutUs />
    </section>
    <section>
      <SpecialMenu />
    </section>
    <section>
      <Chef />
    </section>
    <section>
      <Intro />
    </section>
    <section>
      <Laurels />
    </section>
    <section>
      <Gallery />
    </section>
    <section>
      <FindUs />
    </section>
    <section>
      <Footer />
    </section>
  </main>
);

export default App;
