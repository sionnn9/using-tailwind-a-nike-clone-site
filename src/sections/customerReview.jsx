import ReviewCard from "../components/reviewCard";
import { reviews } from "../constants";

const customerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our?
        <span className="text-coral-red "> Customer </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        {" "}
        blah balah blah blah.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            rating={review.rating}
            feedback={review.feedback}
            customerName={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default customerReview;
