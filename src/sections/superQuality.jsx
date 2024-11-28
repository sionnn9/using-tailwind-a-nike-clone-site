import { shoe8 } from "../assets/images";
import Button from "../constants/button";

const superQuality = () => {
  return (
    <section
      id="about-us"
      className="flex  justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2>
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red "> Super</span>
            <br />
            <span className="text-coral-red ">Quality </span>
            Shoes
          </h2>
          <p className="mt-4 mb-10 lg:max-w-lg info-text">
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah.blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blahblah.
          </p>
          <p className="mt-4 lg:max-w-lg info-text mb-4">
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blahblah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah.
          </p>
          <Button label="view details" />
        </h2>
      </div>
      <div lassName="flex-1 flex justify-center items-center ">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain hover:scale-105 ease-in-out duration-200"
        />
      </div>
    </section>
  );
};

export default superQuality;
