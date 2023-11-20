import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MobileHeader() {
  return (
    <div className="flex items-center bg-neutral-100 grow rounded-lg px-2 lg:px-4 text-body-2">
      <div className="flex items-center p-2 justify-between grow min-w-0 lg:hidden">
        <div className="flex cursor-pointer">
          <MagnifyingGlassIcon className="w-5 h-5 opacity-40 " />
        </div>
        <span className="grow px-2 lg:px-4 ellipsis">
          <div className="text-neutral-500 flex items-center text-body-2">
            <div className="flex gap-2 items-center text-sm text-neutral-500">
              جستجو در
              <div className="width: 90px; height: 24px; line-height: 0;">
                <Image
                  className=""
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
  );
}
