import Header from "./header";
import Footer from "./footer";
import Reviews from "./reviews";
import Pricing from "./pricing";
import Discount from "./discount";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <video
        className="absolute"
        src="https://www.spielcreative.com/wp-content/themes/spiel/videos/coverfold-explainer-videos-new.mp4"
        autoPlay
        loop
        muted
      ></video> */}

      <section className="relative h-screen flex flex-col  text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover contrast-125 "
            src="https://www.spielcreative.com/wp-content/themes/spiel/videos/coverfold-explainer-videos-new.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="video-content  top-0">
          <Header />
        </div>
        <div className="video-content  items-center justify-center text-center backdrop-contrast-200 mt-36">
          <h1 className="text-6xl  sm:text-8xl mt-4 text-bold backdrop-blur-md text-red-500 bg-white/30">
            Go
            <span className="underline decoration-sky-500">
              <span className="text-white">Animatics</span>
            </span>
          </h1>
          <h3 className=" text-3xl text-bold mt-4">
            Grow Your Business With Us
          </h3>

          {/* <p className="mt-12 text-2xl">Get Online Consulation Right now</p> */}

          {/* <div className=" text-red-400 font-bold text-2xl px-0  mt-16">
            <h2>See What We Deliver to Our Clients</h2>
          </div> */}
          <p className="animate-bounce mt-72 text-2xl fonr-semibold">
            Scroll Down
          </p>
        </div>
      </section>

      <div className="bg-black text-white pt-24">
        <div className="mx-auto flex flex-col items-center  px-5  lg:flex-row">
          <div className="mb-16 flex flex-col text-left lg:mb-0 sm:mx-32 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
            <h2 className="mb-4 text-2xl font-bold leading-none sm:text-5xl">
              1. Capture & Hold Attention
            </h2>
            <p className="font-xl mb-8 font-semibold leading-relaxed">
              There is a reason that animation has been so successful with
              children; it can grab and hold their attention, which is no easy
              feat. Animated graphics are very eye-catching, and the movement
              excites the eyes and makes the content interesting to watch{" "}
            </p>
          </div>
          <div className="lg:w-full lg:max-w-2xl">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/756360442?h=804d60209a"
              width="450"
              height="320"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex flex-col px-5  text-left lg:flex-row">
            <div className="hidden sm:mx-32 lg:inline-block lg:w-full lg:max-w-xl">
              <iframe
                src="https://player.vimeo.com/video/756362818?h=0f8371885b"
                width="450"
                height="320"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
              <h2 className="mb-4 text-2xl font-bold leading-none sm:text-5xl">
                2. Communicate More Easily
              </h2>
              <p className="mb-8 font-semibold leading-relaxed text-white">
                Animating information allows for that information to be
                communicated more easily to a wider range of audiences.
                Approximately 65% of people are visual learners, so when
                information is presented in a visual format, viewers are able to
                understand the information better and start to process it more
                quickly. This makes communicating complex topics, such as
                training instructions and highly technical information, easier
                for viewers to understand.
              </p>
            </div>
            <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
              <iframe
                src="https://player.vimeo.com/video/756362818?h=0f8371885b"
                width="450"
                height="320"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center  px-5  lg:flex-row">
          <div className="mb-16 flex flex-col text-left lg:mb-0 sm:mx-32 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
            <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
              3. Engage Deeper
            </h2>
            <p className="font-3xl mb-8 font-semibold leading-relaxed">
              In 2D animation, there is a mix of graphics, voice-over, and text,
              which stimulates different areas of the brain and engages multiple
              senses to help the viewer process and understand information more
              effectively. Animation can also establish a stronger connection
              between the viewer and the company or the individual presenting
              the information because of the deeper engagement that is possible
              with animation. When a viewer experiences something memorable, the
              creators of this memorable experience already have an edge over
              the competition, since they are occupying a portion of the
              viewer’s mind.
            </p>
          </div>
          <div className="lg:w-full lg:max-w-2xl">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/756360442?h=804d60209a"
              width="450"
              height="320"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* steps */}

      <Reviews />
      <Discount />
      <Pricing />

      <Footer />
    </div>
  );
}
