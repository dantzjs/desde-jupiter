import { routes } from "@config/config";

export function Navigation() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {routes.map(({ title, path }) => (
          <li key={title}>
            <a className="text-lg ml-2 font-semibold rounded-none" href={path}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MobileNavigation() {
  return (
    <div className="dropdown dropdown-left">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {routes.map(({ title, path }) => (
          <li key={title}>
            <a className="text-lg rounded-none" href={path}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
