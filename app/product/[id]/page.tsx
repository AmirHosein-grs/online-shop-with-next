import DesktopHeader from "@/app/components/header/desktopHeader";
import Navigation from "../../components/shared/navigation";
import ProductHeader from "./components/productHeader";
import PhotoSlider from "./components/photoSlider";
import ProductSection from "./components/productSection";
import "swiper/css";
import AddToCart from "./components/addToCart";
import Footer from "@/app/components/footer/footer";
import { FaRegHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import { RiLineChartFill } from "react-icons/ri";
import { MdCompare, MdStorefront } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { AiOutlineFileDone } from "react-icons/ai";
import type { Metadata, ResolvingMetadata } from "next";
import { singleProduct } from "@/app/services/products";
import AttributeSection from "./components/attributeSection";
import FeatureSection from "./components/featureSection";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const productId = parseInt(params.id, 10);
  const product = await singleProduct(productId);
  return {
    title: `دیجی کالا  |  ${product.name} `,
  };
}

export default async function SingleProduct({ params }: any) {
  const productId = parseInt(params.id, 10);
  const product = await singleProduct(productId);
  return (
    <>
      <ProductHeader />
      <DesktopHeader />
      <Navigation />
      <div className="lg:hidden">
        <div className=" mb-[90px]">
          <PhotoSlider images={product.images} />
          <ProductSection product={product} />
        </div>
        <AddToCart product={product} productId={productId} />
      </div>
      <div className="hidden lg:flex flex-row lg:px-5 lg:pb-5 ">
        <div className="lg:ml-4 w-[36%] ml-4">
          <div className="flex flex-col items-center lg:max-w-92 xl:max-w-145 lg:block mb-2">
            <div className="flex">
              <div className="flex lg:flex-col lg:gap-y-4 lg:pt-9 text-neutral-700 self-end lg:self-start ">
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <FaRegHeart className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <IoMdShare className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <LuBellRing className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <RiLineChartFill className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <MdCompare className="h-[20px] w-[20px]" />
                  </div>
                </div>
                <div className="z-1 ml-6 lg:ml-4">
                  <div className="flex cursor-pointer">
                    <CiCircleList className="h-[20px] w-[20px]" />
                  </div>
                </div>
              </div>
              <div>
                <PhotoSlider images={product.images} />
              </div>
            </div>
          </div>
        </div>
        <div className="grow">
          <div className="flex items-center w-full px-5 lg:px-0">
            <div>
              <h1 className=" text-2xl text-neutral-900 mb-5 pointer-events-none">
                {product.name}
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-8 mx-1">
            <div className=" col-span-4 xl:col-span-5">
              <div className=" pb-3 min-w-0 mx-5 lg:mx-0 lg:pb-3 border-t-[1px]">
                {product.variety_attributes.map((attribute: any) => (
                  <AttributeSection
                    key={attribute.attribute_id}
                    attribute={attribute}
                  />
                ))}
              </div>
              <FeatureSection features={product.attributes} />
            </div>

            <div className="col-span-4 xl:col-span-3 p-5 border rounded-xl mr-4 bg-neutral-100">
              <div className="">
                <div className="">
                  <div className="flex items-center pb-4">
                    <p className="text-lg font-medium text-neutral-900">
                      <span className="relative">فروشنده</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="w-full flex flex-col">
                    <div className="py-3 flex items-center justify-center border-b-[1px]">
                      <div className="ml-4">
                        <MdStorefront className="w-6 h-6 " />
                      </div>
                      <div className="flex w-full">
                        <div className="flex items-center mt-1 lg:mb-1">
                          <span>
                            <p className="text-sm">{product.market.title}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="py-3 flex items-center justify-center border-b-[1px]">
                      <div className="ml-4">
                        <AiOutlineFileDone className="w-6 h-6 " />
                      </div>
                      <div className="flex w-full">
                        <div className="flex items-center mt-1 lg:mb-1">
                          <span>
                            <p className="text-sm">
                              گارانتی اصالت و سلامت فیزیکی کالا
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AddToCart product={product} productId={productId} />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
}
