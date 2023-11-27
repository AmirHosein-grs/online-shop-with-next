import StickyHeader from "./components/stickyHeader";
import DesktopHeader from "./desktopHeader";
import MobileHeader from "./mobileHeader";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <>
      <header>
        <MobileHeader />
        <StickyHeader />

        <DesktopHeader />
      </header>
    </>
  );
}
