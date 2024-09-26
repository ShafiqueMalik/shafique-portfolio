"use client";
import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import SidebarNavbar from "./SidebarNavbar";

function MenuButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="block text-3xl lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        title="Open Menu"
      >
        <MdMenuOpen />
      </button>
      <SidebarNavbar open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default MenuButton;
