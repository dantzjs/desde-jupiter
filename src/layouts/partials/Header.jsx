import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react';
import { Navigation, MobileNavigation } from '@partials/Navigation';
import Logo from '@components/Logo';
import ThemeIcon from '@components/ThemeIcon.jsx';

export default function Header() {
  return (
    <header className="header z-30 top-0 py-4 sticky bg-base-100">
      <nav className="navbar py-0 px-4">
        <Logo />
        <Navigation />
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <a className="text-base ml-2 font-bold" href="#">
                <IconBrandLinkedin />
              </a>
            </li> */}
            <ThemeIcon />
            <li>
              <a className="text-lg ml-2 font-bold md:border rounded-none" href="https://github.com/dantzjs">
                <IconBrandGithubFilled />
                <span className="hidden md:block">GitHub</span>
              </a>
            </li>
          </ul>
          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
}
