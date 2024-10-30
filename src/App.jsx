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
  <>
    {/* Nav con posición fija */}
    <Nav className="relative top-0 left-0 w-full z-50 bg-black" />

    {/* Contenedor principal que ajusta el contenido debajo del Nav */}
    <main className="pt-[60px]">
      {" "}
      {/* pt-[60px] ajusta el espacio para que no se superponga el Nav */}
      <section>
        <Hero />
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
  </>
);

export default App;

// import {
//   AboutUs,
//   Chef,
//   FindUs,
//   Footer,
//   Gallery,
//   Hero,
//   Intro,
//   Laurels,
//   SpecialMenu,
// } from "./sections/index";
// import Nav from "./components/Nav";

// const App = () => (
//   <main className="relative">
//     <Nav />
//     <section className="">
//       <Hero />
//     </section>
//     <section className="">
//       <AboutUs />
//     </section>
//     <section className="">
//       <SpecialMenu />
//     </section>
//     <section className="">
//       <Chef />
//     </section>
//     <section className="">
//       <Intro />
//     </section>
//     <section className="">
//       <Laurels />
//     </section>
//     <section className="">
//       <Gallery />
//     </section>
//     <section className="">
//       <FindUs />
//     </section>
//     <section className="">
//       <Footer />
//     </section>
//   </main>
// );

// export default App;
