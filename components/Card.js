import Image from "next/image";

const Card = ({ product }) => {
  const { name, name_kor, sell_price, n_brand, thumnail, quality } =
    product.attributes;

  const brand = n_brand.data.attributes.name;
  const thumb = thumnail.data.attributes.url;

  const goToLink = () => {};
  return (
    <div>
      <div
        className="flex flex-col items-start justify-center w-full cursor-pointer space-y-1"
        onClick={goToLink}
      >
        <div className="w-full">
          <Image
            src={thumb}
            alt="11"
            width="300"
            height="300"
            className="rounded-xl bg-blue-50"
          />
        </div>
        <h2 className="text-sm font-semibold">{brand}</h2>
        <p className="text-xs tracking-tight">{name}</p>
        <p className="hidden md:flex text-xs text-gray-400 mb-2 tracking-tight">
          {name_kor}
        </p>
        <div className="leading-none">
          <p className="text-sm font-semibold">{sell_price}원</p>
          <p className="text-[5px] text-gray-400">구매가</p>
        </div>
        {quality && (
          <p className="border border-green-500 rounded-sm text-green-500 text-[6px] py-0.5 px-1 flex items-center justify-center w-fit h-fit">
            👍 고퀄리티
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
