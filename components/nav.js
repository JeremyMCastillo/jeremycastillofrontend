import React from "react";
import Link from "next/link";
import Image from "../components/image";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { getStrapiMedia } from "../lib/media";

const Nav = ({ categories }) => {
  const { profilePicture, siteName } = useContext(GlobalContext);

  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 font-chivo" aria-label="Sidebar">
      <div className="h-full px-3 py-12 overflow-y-auto bg-blue-600 dark:bg-gray-800">
          <div className="flex flex-col content-center items-center justify-center">
            <Image className="rounded-full mb-2 w-20 md:w-48 border-2 border-solid border-black shadow-md" image={profilePicture} />
            <h2 className=" text-xl text-white dark:text-white font-chivo font-thin">{siteName}</h2>
          </div>
          <ul className="space-y-2 font-medium text-center uppercase">
            <li>
                <a href="/" className="flex items-center text-center content-center justify-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="">About</span>
                </a>
            </li>
            <li>
                <a href="/blog" className="flex items-center text-center content-center justify-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="">Blog</span>
                </a>
            </li>
            <li>
                <a href="/category/projects" className="flex items-center text-center content-center justify-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="">Projects</span>
                </a>
            </li>
            <li>
                <a href="/contact" className="flex items-center text-center content-center justify-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="">Contact</span>
                </a>
            </li>
          </ul>
      </div>
    </aside>
  );
};

export default Nav;