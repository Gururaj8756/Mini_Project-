import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <>
      <div id="home" className="hero min-h-screen">
        <div
          className="hero min-h-screen bg-base-200"
          style={{ backgroundImage: 'url("Hero_bg.png")' }}
        >
          <div className="text-left">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="Hero_img.png"
                className="mx-3 max-w-screen-sm rounded-lg"
                loading="lazy" // Lazy load 
              />
              <div className="text-left font-serif ">
                <h1 className="text-5xl font-bold  ">
                  The <span className=" text-secondary">Smart </span>Choice For{" "}
                  <span className=" text-secondary">Future</span>
                </h1>
                <p className="py-6 pr-5 text-gray-500">
                  PrepMastery is a training provider that specializes in
                  accredited and bespoke training Companies for your placement
                  needs.
                </p>
                <AnchorLink href="#Companies" className="btn btn-primary">
                  Get Started
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-b from-yello">
        <img
          className="rounded w-full sm:w-8/12 shadow-2xl hover:shadow-lg"
          src="Hero_3_.png"
          loading="lazy" 
        />
      </div>
    </>
  );
};

export default Hero;
