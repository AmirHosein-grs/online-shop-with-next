import Image from "next/image";
import Link from "next/link";
import { CiCircleInfo } from "react-icons/ci";

export default function AddToCart() {
  return (
    <div className=" fixed right-0 bottom-0 w-full bg-white lg:bg-inherit lg:relative  lg:mb-0 pb-5 lg:px-0 px-5 pt-5 lg:border-0 border-t-4">
      <div className="flex lg:flex-col-reverse flex-row justify-between items-center">
        <div className="w-6/12 lg:w-full flex justify-center bg-red-500 rounded-lg lg:mt-3">
          <Link href={"/"}>
            <div className=" text-white text-center p-3 text-xs w-max">
              افزودن به سبد
            </div>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-between  mr-4 lg:mt-5 lg:w-full lg:px-2">
          <div className="flex justify-start lg:justify-end items-center">
            <div className="ml-1 lg:text-lg text:xs font-bold">535,000</div>
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
          <CiCircleInfo className="w-5 h-5 hidden lg:flex" />
        </div>
      </div>
    </div>
  );
}
