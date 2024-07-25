import React from "react";
import HeroSvg from "./svg/hero-svg";
import Button from "./button";

const Hero = () => {
  return (
    <section className="flex py-4 space-x-[96px] sm:py-16 items-center">
      <div  >
        <p className="text-neutral-d_grey text-4xl font-semibold sm:text-h1">
          Lessons and insights{" "}
          <span className="text-primary">from 8 years</span>
        </p>
        <p className="text-neutral-grey text-sm mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button size="large" variant="primary" className="mt-8">
          Register
        </Button>
      </div>
      <div className="hidden sm:block">
        <HeroSvg />
      </div>
    </section>
  );
};

export default Hero;
