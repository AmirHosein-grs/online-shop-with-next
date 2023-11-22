import Footer from "@/app/components/footer/footer";
import DesktopHeader from "@/app/components/header/desktopHeader";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DesktopHeader />
      {children}
      <Footer />
    </>
  );
}
