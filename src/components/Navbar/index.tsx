import Logo from '../Logo';
import HireMeButton from '../HireMeButton';
import Container from '../layout/Container';
import MenuButton from './MenuButton';
import MenuListClient from './MenuListClient';
import ThemeSwitch from '../ThemeSwitch';
import { IPortfolioData } from '@/shared/types/models';

type NavbarProps = {
  portfolioData: IPortfolioData;
};
function Navbar({ portfolioData }: NavbarProps) {
  return (
    <div className="h-16 shadow fixed left-0 bg-white op right-0 z-50 top-0 dark:bg-dark dark:shadow-gray-700">
      <Container className="flex h-full justify-between items-center">
        <MenuButton portfolioData={portfolioData} />

        <Logo className="hidden mr-5 lg:ml-0 lg:flex" />
        <MenuListClient />
        <div className="flex items-center gap-4 lg:gap-5">
          <HireMeButton />
          <ThemeSwitch />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
