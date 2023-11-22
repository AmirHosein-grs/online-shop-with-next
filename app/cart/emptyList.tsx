import Image from "next/image";

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
        <div className=" text-xs">
          <p className="text-center my-5">سبد خرید شما خالی است!</p>
          <p className="text-center text-[8px] ">
            می‌توانید برای مشاهده محصولات بیشتر به صفحه محصولات بروید:
          </p>
        </div>
      </div>
    </div>
  );
}
