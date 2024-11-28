import Button from "../constants/button";
import { offer } from "../assets/images";
const specialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col pl-6">
        <h2>
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Special
            <span className="text-coral-red "> Offer</span>
            <br />
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
    </section>
  );
};

export default specialOffer;
