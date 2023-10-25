import { IconBrandGithubFilled } from '@tabler/icons-react';
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
            <ThemeIcon />
            <li className="hidden md:block">
              <a className="text-lg ml-2 font-bold md:border rounded-none" href="https://github.com/dantzjs">
                <IconBrandGithubFilled />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
          <MobileNavigation />
        </div>
      </nav>
    </header>
  );
}
