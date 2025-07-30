'use client';
import React, { useState } from 'react';
import { MdMenuOpen } from 'react-icons/md';
import SidebarNavbar from './SidebarNavbar';
import { IPortfolioData } from '@/shared/types/models';

type MenuButtonProps = {
  portfolioData: IPortfolioData;
};
function MenuButton({ portfolioData }: MenuButtonProps) {
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
      <SidebarNavbar open={open} onClose={() => setOpen(false)} portfolioData={portfolioData} />
    </>
  );
}

export default MenuButton;
