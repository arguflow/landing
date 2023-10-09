import { motion } from "framer-motion";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-customDarkBg1 w-full mt-12 mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-white">
                Trusted by our
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-customSecondary">
                partners and customers
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex justify-center space-x-6 flex-wrap -m-4">
              <div className="w-64 py-6 flex justify-center">
                <img src="/outlierdb_logo.jpeg" alt="capital-factory" />
              </div>
              <div className="w-64 py-6 flex  justify-center">
                <img src="/chicago-debate.png" alt="Chicago Debate Society" />
              </div>
              <div className="w-64 py-6 flex  justify-center">
                <img src="/FutoMainLogo.svg" alt="Futo" />
              </div>
              <div className="w-64 py-6 flex justify-center">
                <img src="/rr-logo-square-silver-gold-large.png" alt="RR" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
