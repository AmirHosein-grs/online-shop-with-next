import Image from "next/image";
import Link from "next/link";

export default function EmptyList() {
  return (
    <div>
      <div className="flex h-full flex-col items-center justify-center ">
        <div>
          <Image
            src="/Cart/empty-cart.svg"
            alt="Shop Logo"
            width={200}
            height={180}
            priority
          />
        </div>
        <div className="text-xs lg:text-lg">
          <p className="text-center my-5 ">سبد خرید شما خالی است!</p>
          <p className="text-center text-[8px] lg:text-sm ">
            می‌توانید برای مشاهده محصولات بیشتر به صفحه محصولات بروید:
          </p>
          <Link
            href={"/main/productList"}
            className="w-full flex justify-center pt-3 text-blue-500 text-center"
          >
            صفحه محصولات
          </Link>
        </div>
      </div>
    </div>
  );
}
