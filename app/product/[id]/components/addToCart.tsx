import Image from "next/image";
import Link from "next/link";

export default function AddToCart() {
  return (
    <div className="mb-5 px-5 pt-5 border-t-4">
      <div className="flex flex-row justify-between items-center">
        <div className="w-6/12 flex justify-center bg-red-500 rounded-lg ">
          <Link href={"/"}>
            <div className=" text-white text-center p-3 text-xs w-max">
              افزودن به سبد خرید
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-between items-end mr-4 ">
          <div className="flex justify-start items-center">
            <div className="ml-1 text-xs font-bold">535,000</div>
            <div>
              <Image
                src="/Toman/Toman.svg"
                alt="Shop Logo"
                width={12}
                height={12}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
