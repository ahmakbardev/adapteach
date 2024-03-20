"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "./../../public/images/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const manfaatDiv = document.getElementById("manfaat");
      const caraDiv = document.getElementById("cara");

      if (manfaatDiv && caraDiv) {
        const manfaatRect = manfaatDiv.getBoundingClientRect();
        const caraRect = caraDiv.getBoundingClientRect();

        if (manfaatRect.top <= 0 && caraRect.top > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = `flex fixed w-full items-center px-10 py-3 justify-between transition-all ease-in-out duration-300 ${
    scrolled
      ? "bg-custom-dark/50 backdrop-blur-md text-white"
      : "bg-slate-200/60 backdrop-blur-md text-black"
  } z-50`;

  return (
    <nav className={navbarClass}>
      <Image src={Logo} alt="Logo" className="w-16" />
      <ul className="flex gap-10">
        <li className="nav-link-hover">Fitur Kami</li>
        <li className="nav-link-hover">Cara Kerja</li>
        <li className="nav-link-hover">Manfaat Fitur</li>
        <li className="nav-link-hover">Partner</li>
        <li className="nav-link-hover">FaQ</li>
        <li className="nav-link-hover">Hubungi Kami</li>
      </ul>
      <button className="bg-primary py-3 px-8 rounded-lg text-white  hover:bg-primary/75 transition-all ease-in-out shadow-xl">
        Join Beta
      </button>
    </nav>
  );
};

export default Navbar;
