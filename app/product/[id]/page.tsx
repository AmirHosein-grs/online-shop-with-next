import DesktopHeader from "@/app/components/header/desktopHeader";
import Navigation from "./navigation";
import ProductHeader from "./productHeader";

export default function SingleProduct() {
  return (
    <>
      <ProductHeader />
      <DesktopHeader />
      <Navigation />
    </>
  );
}
