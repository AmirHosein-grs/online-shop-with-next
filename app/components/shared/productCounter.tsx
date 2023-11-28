import { addCount, reduceProductCount } from "@/app/store/features/cartSlice";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface ProductCounterProps {
  product: any;
  setCartButton?: any;
  cart: any;
  productId?: number;
  goToCart: boolean;
}

export default function ProductCounter({
  product,
  setCartButton,
  productId,
  cart,
  goToCart,
}: ProductCounterProps) {
  const desiredObject = cart?.cart?.find((obj: any) => obj.id === productId);
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(addCount({ id: product.id, count: 1 }));
  };
  const reduceHandler = () => {
    dispatch(reduceProductCount(product.id));
  };
  const deleteHandler = () => {
    dispatch(reduceProductCount(product.id));
    if (setCartButton) {
      setCartButton(false);
    }
  };
  return (
    <div className="w-full flex justify-center bg-White lg:mt-3 ">
      <div className="w-full flex flex-row">
        <div className="flex items-center rounded-lg w-full shadow-lg border-2 p-2 border-neutral-100">
          <div className="flex w-full items-center justify-between user-select-none px-2 rounded-medium grow">
            <div className="flex cursor-pointer" onClick={addHandler}>
              <HiOutlinePlus className="w-4 h-4 text-rose-500 " />
            </div>
            <span className="flex flex-col select-none items-center justify-between text-rose-500">
              {desiredObject?.count}
            </span>
            {desiredObject?.count === 1 ? (
              <div className="flex cursor-pointer" onClick={deleteHandler}>
                <FaRegTrashCan className="w-4 h-4 text-rose-500" />
              </div>
            ) : (
              <div className="flex cursor-pointer" onClick={reduceHandler}>
                <HiOutlineMinus className="w-4 h-4 text-rose-500" />
              </div>
            )}
          </div>
        </div>
        {goToCart && (
          <div className=" mr-4 hidden lg:flex flex-col justify-between ">
            <p className="text-sm w-max">در سبد شما</p>
            <div className="flex flex-row text-xs w-max">
              <span>مشاهده</span>
              <Link href={"/cart"} className=" text-blue-500 text-xs mr-1">
                سبد خرید
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
