const shoeCard = ({ imgURl, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURl.bigShoe) {
      changeBigShoeImage(imgURl.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl
  ${bigShoeImg === imgURl.bigShoe ? `border-coral-red` : `border-transparent`}
  cursor-pointer max-sm:flex-1 
  `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-[#8581a3] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURl.thumbnail}
          alt="shoe collection"
          height={103}
          width={127}
          className="object-contain group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default shoeCard;
