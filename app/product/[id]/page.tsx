import DesktopHeader from "@/app/components/header/desktopHeader";
import Navigation from "./components/navigation";
import ProductHeader from "./components/productHeader";
import PhotoSlider from "./components/photoSlider";
import ProductSection from "./components/productSection";
import "swiper/css";
import AddToCart from "./components/addToCart";

export default function SingleProduct() {
  return (
    <>
      <ProductHeader />
      <DesktopHeader />
      <Navigation />
      <PhotoSlider />
      <ProductSection />
      <AddToCart />
    </>
  );
}
