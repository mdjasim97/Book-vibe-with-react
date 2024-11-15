import {NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] font-WorkSans font-bold border text-lg border-[#23BE0A]"
              : "font-bold text-lg"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/listed"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] font-WorkSans text-lg font-bold border border-[#23BE0A]"
              : "font-bold text-lg"
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/read"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] text-lg font-WorkSans font-bold border border-[#23BE0A]"
              : "font-bold text-lg"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-3xl font-bold bg-300% bg-gradient-to-r from-[#23BE0A] via-red-500 to-[#59C6D2] text-transparent bg-clip-text animate-gradient">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-base text-white  bg-[#23BE0A] lg:mr-4">
          Sign In
        </a>
        <a className="btn text-base text-white  bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
