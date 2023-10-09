import { motion } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Demos = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-12 mb-8 sm:mt-8 sm:mb-16 xl:mt-0 lg:pt-0"
      id="demos"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-[100vw] flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">Live Demos</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                See how Arguflow works in action
              </h2>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a class="underline" href="https://enron-search.arguflow.ai/">
                    Enron Semantic Search
                  </a>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <a class="underline" href="https://enron-chat.arguflow.ai/">
                    Enron RAG Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
