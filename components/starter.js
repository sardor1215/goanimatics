import Header from "./header";

export default function Starter() {
  return (
    <section className="relative h-screen flex flex-col    text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className=" min-w-full min-h-full absolute object-cover contrast-125 "
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
        <h3 className=" text-3xl text-bold mt-4">Grow Your Business With Us</h3>

        <p className="animate-bounce mt-48 sm:mt-72 text-2xl fonr-semibold">
          Scroll Down
        </p>
      </div>
    </section>
  );
}
