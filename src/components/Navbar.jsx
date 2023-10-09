import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ArguflowLogo } from "../assets/logos/ArguflowLogo";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  {
    label: "Demos",
    href: "#demos",
    ariaLabel: "Arguflow Live Demos",
  },
  {
    label: "Documentation",
    href: "https://docs.arguflow.ai",
    ariaLabel: "Documentation",
  },
  { label: "Blog", href: "https://blog.arguflow.ai", ariaLabel: "Blog" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    try {
      void fetch(`https://api.github.com/repos/arguflow/arguflow`, {
        headers: {
          Accept: "application/vnd.github+json",
        },
        signal: abortController.signal,
      }).then((response) => {
        if (!response.ok) {
          return;
        }
        void response.json().then((data) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          setStarCount(data.stargazers_count);
        });
      });
    } catch (e) {
      console.error(e);
    }

    return () => {
      abortController.abort();
    };
  });

  return (
    <>
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
          <div class="flex space-x-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <div className="grow basis-0 justify-end flex items-center">
                <a
                  className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 p-2 text-sm flex gap-x-1 md:gap-x-2 items-center"
                  href="https://github.com/arguflow"
                  target="_blank"
                  aria-label="Star on GitHub"
                >
                  <GithubIcon />
                  <p class="text-sm">STAR US</p> | <p>{starCount}</p>
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
                  href="https://github.com/arguflow/arguflow"
                  target="_blank"
                  aria-label="Star on GitHub"
                >
                  <GithubIcon />
                  <p class="text-sm">STAR US</p>|<p>{starCount}</p>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
