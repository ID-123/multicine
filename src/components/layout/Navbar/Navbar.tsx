import { NavLink } from "react-router";

function navLinkStyles({ isActive }: { isActive: boolean }) {
  return isActive ? "font-bold underline" : "";
}

export function Navbar() {
  return (
    <header>
      <nav className="flex justify-end p-2">
        <ul className="flex flex-row list-none gap-2 ">
          <li>
            <NavLink className={navLinkStyles} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkStyles} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkStyles} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
