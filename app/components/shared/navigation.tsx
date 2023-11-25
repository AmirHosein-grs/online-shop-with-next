import Link from "next/link";

import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import SwiperNavigation from "../../product/[id]/components/swiperNavigation";
import { LiaBullhornSolid } from "react-icons/lia";

interface NavigationProps {
  leftSide?: boolean;
}

export default function Navigation({ leftSide = true }: NavigationProps) {
  return (
    <div className="  flex mx-5  items-center">
      <nav className="py-2  lg:px-0 w-full">
        <SwiperNavigation />
      </nav>
      {leftSide && (
        <div className="hidden lg:flex items-center mr-auto py-2 text-sm">
          <div>
            <Link
              href={"/"}
              className="ml-8 text-neutral-400 flex items-center w-max"
            >
              <span>ثبت آگهی در پیندو</span>
              <div className="mr-1">
                <LiaBullhornSolid className="w-4 h-4" />
              </div>
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className=" text-neutral-400 flex items-center w-max"
            >
              <span>فروش در دیجی‌کالا</span>
              <div className="mr-1">
                <BuildingStorefrontIcon className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
