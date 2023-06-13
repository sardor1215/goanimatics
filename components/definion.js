export default function Definition() {
  return (
    <div className="bg-black text-white border-t border-red-500 pt-24">
      <div className="mx-auto flex flex-col items-center  px-5  lg:flex-row">
        <div className="mb-16 flex flex-col text-left lg:mb-0 sm:mx-32 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 ">
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
            className="w-72 sm:w-96"
            title="vimeo-player"
            src="https://player.vimeo.com/video/756360442?h=804d60209a"
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
              className="w-72 sm:w-96"
              src="https://player.vimeo.com/video/756362818?h=0f8371885b"
              height="320"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16  lg:pt-24">
            <h2 className="mb-4 text-2xl font-bold leading-none sm:text-5xl">
              2. Communicate More Easily
            </h2>
            <p className="mb-8 font-semibold leading-relaxed text-white">
              Animating information allows for that information to be
              communicated more easily to a wider range of audiences.
              Approximately 65% of people are visual learners, so when
              information is presented in a visual format, viewers are able to
              understand the information better and start to process it more
              quickly. This makes communicating complex topics, such as training
              instructions and highly technical information, easier for viewers
              to understand.
            </p>
          </div>
          <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
            <iframe
              className="w-72 sm:w-96 ml-8 sm:ml-0"
              src="https://player.vimeo.com/video/756362818?h=0f8371885b"
              height="320"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center  px-5  lg:flex-row">
        <div className="mb-16 flex flex-col text-left lg:mb-0 sm:mx-32 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 ">
          <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
            3. Engage Deeper
          </h2>
          <p className="font-3xl mb-8 font-semibold leading-relaxed">
            In 2D animation, there is a mix of graphics, voice-over, and text,
            which stimulates different areas of the brain and engages multiple
            senses to help the viewer process and understand information more
            effectively. Animation can also establish a stronger connection
            between the viewer and the company or the individual presenting the
            information because of the deeper engagement that is possible with
            animation. When a viewer experiences something memorable, the
            creators of this memorable experience already have an edge over the
            competition, since they are occupying a portion of the viewer’s
            mind.
          </p>
        </div>
        <div className="lg:w-full lg:max-w-2xl">
          <iframe
            className="w-72 sm:w-96"
            height="260"
            src="https://www.youtube-nocookie.com/embed/lbbjy0tD1eM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
