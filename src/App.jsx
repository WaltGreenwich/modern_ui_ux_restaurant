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
  <div className="overflow-x-hidden min-h-screen">
    {/* Nav con posición fija */}
    <Nav className="fixed top-0 left-0 w-full z-50 bg-black" />

    {/* Contenedor principal que ajusta el contenido debajo del Nav */}
    <main className="pt-[60px] max-w-screen overflow-x-hidden mx-auto">
      {/* Secciones individuales */}
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
  </div>
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
//   <>
//     {/* Nav con posición fija */}
//     <Nav className="relative top-0 left-0 w-full z-50 bg-black" />

//     {/* Contenedor principal que ajusta el contenido debajo del Nav */}
//     <main className="pt-[60px]">
//       {" "}
//       {/* pt-[60px] ajusta el espacio para que no se superponga el Nav */}
//       <section>
//         <Hero />
//       </section>
//       <section>
//         <AboutUs />
//       </section>
//       <section>
//         <SpecialMenu />
//       </section>
//       <section>
//         <Chef />
//       </section>
//       <section>
//         <Intro />
//       </section>
//       <section>
//         <Laurels />
//       </section>
//       <section>
//         <Gallery />
//       </section>
//       <section>
//         <FindUs />
//       </section>
//       <section>
//         <Footer />
//       </section>
//     </main>
//   </>
// );

// export default App;
