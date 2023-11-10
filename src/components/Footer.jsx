import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { ArguflowLogo } from "../assets/logos/ArguflowLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10 w-screen lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full mb-16 lg:mb-0">
              <div className="flex justify-center items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <ArguflowLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Arguflow
                </div>
              </div>
              <p className="mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center mx-auto">
                Book a meeting
                <a
                  href="https://arguflow.ai/meet"
                  target="_blank"
                  className="text-gray-100 ml-1.5 "
                  aria-label="DarkAdmin"
                >
                  here
                </a>
              </p>
              <p className="mb-10 mt-2 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center mx-auto">
                contact@arguflow.gg
              </p>
              <div className="w-36 mx-auto">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://discord.gg/BVk5a97q2R"
                >
                  <DiscordIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://twitter.com/arguflow"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
