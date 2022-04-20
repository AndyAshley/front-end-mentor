import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center">
      <Navbar />
      <img src="/images/image-hero-mobile.jpg" alt="Mastercraft Bamboo Monitor Riser" className="object-cover mx-auto md:hidden" />
      <img src="/images/image-hero-desktop.jpg" alt="Mastercraft Bamboo Monitor Riser" className="hidden md:block w-full" />
    </div>
  );
};

export default Hero;
