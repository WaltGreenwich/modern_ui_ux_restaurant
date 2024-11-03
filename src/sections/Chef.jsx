import { images } from "../constants";
import SubHeading from "../components/SubHeading";

const Chef = () => {
  return (
    <section className="bg-[url('src/assets/bg.png')] bg-cover bg-fixed min-h-screen py-8">
      <div className="flex flex-row">
        <div>
          <img src={images.chef} alt="chef" />
        </div>

        <div className="text-white text-2xl mt-1 md:mb-20 mx-4 ">
          <SubHeading title="Chef’s Word" />
          <h1 className="text-5xl xs:text-4xl font-base font-bold text-golden tracking-custom mb-8">
            What we believe in
          </h1>
          <div>
            <div>
              <img src={images.quote} alt="quote" />
              <p className="text-lg py-8">
                "At Gericht, we believe that every dish tells a story. Our
                executive chef leads the team with a passion for perfection and
                an unwavering commitment to quality. We select only the freshest
                ingredients and combine them in ways that honor both tradition
                and innovation. For us, cooking is not just an act but an
                art—one that connects people and elevates every shared moment.
                Savor with us the essence of culinary excellence.""
              </p>
            </div>
            <p>Autor</p>
          </div>
          <div>
            <p>Kevin Luo</p>
            <p className="font-alt">Chef & Founder</p>
            <img src={images.sign} alt="sign" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
