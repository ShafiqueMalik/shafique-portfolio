import Logo from "../Logo";
import HireMeButton from "../HireMeButton";
import Container from "../layout/Container";
import MenuButton from "./MenuButton";
import MenuListClient from "./MenuListClient";

function Navbar() {
  return (
    <div className="h-16 shadow fixed left-0 bg-white op right-0 z-50 top-0">
      <Container className="flex h-full justify-between items-center">
        <MenuButton />

        <Logo className="hidden mr-5 lg:ml-0 lg:flex" />
        <MenuListClient />
        <HireMeButton />
      </Container>
    </div>
  );
}

export default Navbar;
