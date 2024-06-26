import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Goanimatics</title>
        <meta name="description" content="Goanimatics -- Animate with US" />

        <link
          rel="icon"
          href="https://goanimatics.net/wp-content/uploads/2023/01/fav-100x100.png"
          sizes="32x32"
        ></link>
        {/* pricing style's */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        {/* review's style */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
        />
      </Head>
      <nav className="w-full relative shadow mt-2 border-t-4 border-b-4 border-red-500">
        <Script src="https://unpkg.com/swiper/swiper-bundle.min.js"></Script>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-3 md:block">
              <a href="#">
                <h2 className="text-2xl text-red-500 font-bold">
                  Go
                  <span className="underline decoration-sky-500">
                    <span className="text-white">Animatics</span>
                  </span>
                </h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 text-xl md:flex md:space-x-6 md:space-y-0">
                <li className="text-white font-semibold hover:text-red-500 transform  transition duration-200 ease-in">
                  <Link href="#portfolio">
                    <a>Portfolio</a>
                  </Link>
                </li>
                {/* <li className="text-white font-semibold">
                  <Link href="/blogs">
                    <a>Blogs</a>
                  </Link>
                </li> */}
                <li className="text-white font-semibold hover:text-red-500 transform  transition duration-200 ease-in">
                  <Link href="#pricing">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li className="text-white font-semibold hover:text-red-500 transform  transition duration-200 ease-in">
                  <Link href="#faq">
                    <a>About Us</a>
                  </Link>
                </li>
{/*
                <li className="text-white font-semibold hover:text-red-500 transform  transition duration-200 ease-in">
                  <Link href="javascript:void( window.open( 'https://form.jotform.com/231294780271457', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) ">
                    <a>Get A Quote</a>
                  </Link>
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
