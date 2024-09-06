import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { APP_IMAGES } from "../../../public/assets/images";
import { navigationData } from "@/data/appData";
import SocialIcons from "../SocialIcons";
import Link from "next/link";
import SideMenuClient from "./SideMenuClient";
import Logo from "../Logo";

type SidebarNavbarProps = {
  open: boolean;
  onClose: () => void;
};

const SidebarNavbar = ({ open, onClose }: SidebarNavbarProps) => {
  return (
    <div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[100vh] max-w-[250px]  w-[80vw] bg-white z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        {open && (
          <div className="absolute left-[260px] top-2 text-white text-3xl  ">
            <button onClick={onClose}>
              <IoMdClose />
            </button>
          </div>
        )}

        {/* Sidebar Content */}
        <div className="p-4 pt-4 flex flex-col   h-full overflow-auto">
          {/* Top Section */}
          <div className="flex-1">
            <div className="flex flex-col items-center text-center mb-4">
              <Image
                src={APP_IMAGES.malik}
                alt="Profile"
                width={60}
                height={60}
                className="w-16 h-16 bg-primary rounded-full mb-1"
              />
              <h3 className="text-lg font-semibold">Shafique Malik</h3>
              <p className=" text-secondary text-xs">Front End Developer</p>
            </div>

            {/* Middle Section: Navigation */}
            <nav className="mb-5 mt-5">
              <SideMenuClient onClose={onClose} />
            </nav>
          </div>
          {/* Bottom Section: Social Icons */}
          <div className="flex justify-around text-gray-500 mb-3">
            <SocialIcons direction="row" rounded iconClassName="text-white" />
          </div>
          <Logo className="justify-center text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SidebarNavbar;
