import Image from "next/image";
import MobileHeader from "./mobileHeader";
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  RectangleGroupIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <>
      <header>
        <nav>
          <div className="sticky top-0 left-0 w-full z-3 bg-neutral-000 ">
            <div className="p-2 relative flex items-center z-5 bg-neutral-000 shadow-1-bottom">
              <div className="relative  ml-0 w-full">
                <MobileHeader />
                <div className="flex items-center p-2 justify-between grow min-w-0 invisible lg:visible">
                  <div className="flex">
                    <div>
                      <Link href={"/"}>
                        <Image
                          className=""
                          src="/Logo.svg"
                          alt="Shop Logo"
                          width={115}
                          height={30}
                          priority
                        />
                      </Link>
                    </div>
                    <div className=" mr-5">
                      {/* <MagnifyingGlassIcon className=" w-5 h-5" /> */}
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <ArrowRightOnRectangleIcon className=" w-5 h-5" />
                    </div>
                    <div>
                      <ShoppingCartIcon className=" w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
