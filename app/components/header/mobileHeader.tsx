import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MobileHeader() {
  return (
    <div className="sticky top-0 left-0 w-full z-3 bg-neutral-000 lg:hidden">
      <div className="p-2 relative flex items-center z-5 bg-neutral-000 shadow-1-bottom">
        <div className="relative  ml-0 w-full">
          <div className="flex items-center bg-neutral-100 grow rounded-lg px-2 lg:px-4 text-body-2">
            <div className="flex items-center p-2 justify-between grow min-w-0 ">
              <div className="flex cursor-pointer">
                <MagnifyingGlassIcon className="w-5 h-5 opacity-40 " />
              </div>
              <span className="grow px-2 lg:px-4 ellipsis">
                <div className="text-neutral-500 flex items-center text-body-2">
                  <div className="flex gap-2 items-center text-sm text-neutral-500">
                    جستجو در
                    <div>
                      <Image
                        src="/digi.svg"
                        alt="Shop Logo"
                        width={115}
                        height={30}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
