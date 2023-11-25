import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { GoSortDesc } from "react-icons/go";

export default function Filter() {
  return (
    <div className="sticky lg:static top-10 bg-white z-10 lg:hidden">
      <div>
        <div className="flex items-center border-b-[1px] gap-4 text-xs md:text-sm sticky top-20 overflow-y-scroll no-scrollbar  bg-white z-5 ">
          <div className="relative">
            <div className="py-3">
              <div className="flex items-center bg-white ">
                <div className="flex ml-2">
                  <AdjustmentsHorizontalIcon className="w-6 h-6" />
                </div>
                <p className=" cursor-pointer  ">
                  <span className="relative">فیلتر</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-4 grow">
            <div className="py-3">
              <div className="flex items-center">
                <div className="flex ml-2">
                  <GoSortDesc className="w-6 h-6 -scale-x-100" />
                </div>
                <p className=" cursor-pointer ">
                  <span className="relative">پربازدیدترین</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 text-neutral-500 text-[10px]  md:text-xs z-2">
          <span>همه کالاها</span>
          <div className="mr-auto">
            <span className="flex items-center">۱۵۱,۷۶۱ کالا</span>
          </div>
        </div>
      </div>
    </div>
  );
}
