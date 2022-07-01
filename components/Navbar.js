import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex space-x-12 items-end">
      <img src="assets/images/Logo.png" />
      <div>
        <ul className="flex space-x-2">
          <li>
            <Link href={"/"}>
              <a className="link-hover">Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <a className="link-hover">Exercises</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
