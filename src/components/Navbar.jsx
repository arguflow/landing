import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ArguflowLogo } from "../assets/logos/ArguflowLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Product Offering", href: "#features", ariaLabel: "Product Offering" },
  { label: "Documentation", href: "https://docs.arguflow.ai", ariaLabel: "Documentation" },
  { label: "Blog", href: "https://blog.arguflow.ai", ariaLabel: "Blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="astro-3EF6KSR2 card font-semibold py-3"
        style={{
          width: "100%",
          color: "#00f",
          textAlign: "center",
          backgroundColor: "#ff0",
          backgroundImage: "linear-gradient(59deg, #a33eb5 0%, #00dde7 100%)",
          flex: 1,
          justifyContent: "center",
          margin: 0,
          fontSize: "20px",
          position: "relative",
        }}
      >
        <div className="astro-3EF6KSR2 p-2" style={{ color: "#fff" }}>
          Check out{" "}
          <a
            className="astro-3EF6KSR2 underline font-bold"
            href="https://vault.arguflow.ai"
            style={{ color: "#d3ff19" }}
          >
            Vault
          </a>
          : a PoC of Arguflow's new AI infrastructure
        </div>
      </div>
      <nav className="w-full max-w-[100vw] h-20 flex flex-col justify-center items-center sticky top-0 bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
        <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <a className="navbar-link" href="#home" aria-label="Home">
              <div className="flex justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <ArguflowLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Arguflow
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="hidden lg:flex h-full pl-12 pb-2">
              {navbarLinks.map(({ href, label, ariaLabel }) => (
                <a
                  className="navbar-link"
                  href={href}
                  aria-label={ariaLabel}
                  key={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="grow basis-0 justify-end hidden lg:flex items-center">
              <a
                className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://github.com/arguflow"
                target="_blank"
                aria-label="Star on GitHub"
              >
                <GithubIcon />
                <span className="pt-px">Star on Github</span>
              </a>
            </div>
          </motion.div>
          <div
            className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 "></div>
          </div>
        </div>
        {/* Mobile navbar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
              >
                {navbarLinks.map(({ label, href, ariaLabel }) => (
                  <a
                    key={href}
                    className="navbar-link"
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {label}
                  </a>
                ))}
                <a
                  className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                  href="https://github.com/arguflow"
                  target="_blank"
                  aria-label="Star on GitHub"
                >
                  <GithubIcon />
                  Star on Github
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
