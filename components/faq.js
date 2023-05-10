import Link from "next/link";

export default function Faq() {
  return (
    <div className="border-t border-red-500">
      <div className=" p-4 rounded-lg shadow-xl py-8 ">
        <h4 className="text-4xl font-bold text-red-500 tracking-widest uppercase text-center">
          Frequently Asked Questions & Answers
        </h4>
        {/* <p className="text-center text-gray-600 text-sm mt-2">
          Here are some of the frequently asked questions
        </p> */}
        <div className="grid md:grid-cols-2 space-y-12 px-2 xl:px-16 mt-12">
          <div className="mt-4 flex transform hover:shadow-2xl  hover:scale-105 transition duration-200 ease-in">
            <div>
              <div className="flex items-center h-16 border-l-4 border-red-500">
                <span className="text-4xl text-red-500 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-white px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-red-500 font-bold">
                  How Do I Get Started?
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-gray-500 ">
                  Once you choose our service then be directed to our payment
                  processing page to use Paypal, Visa, Mastercard, or American
                  Express. After purchase you will be asked to download our
                  production guiding questionnaire, email that to
                  <span className="text-white font-bold">
                    {" "}
                    goanimatics@mail.com
                  </span>{" "}
                  and off we go!
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex transform hover:shadow-2xl  hover:scale-105 transition duration-200 ease-in">
            <div>
              <div className="flex items-center h-16 border-l-4 border-red-500">
                <span className="text-4xl text-red-500 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-white px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-red-500 font-bold">
                  How Does It Work?
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-gray-500 ">
                  Once you have placed your order and completed our
                  questionnaire we will move through script, voice-over,
                  storyboard and animation in an average period of 2 or 8 weeks
                  depending on the package. We will assign a project manager to
                  your video, who will guide you through the process in a
                  done-for-you manner for explainer/whiteboard packages and a
                  done-with-you manner for premium videos.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex transform hover:shadow-2xl  hover:scale-105 transition duration-200 ease-in">
            <div>
              <div className="flex items-center h-16 border-l-4 border-red-500">
                <span className="text-4xl text-red-500 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-red-500 font-bold">
                  Is It Limited To One Video Per Customer?
                </span>
              </div>
              <div className="flex items-center ">
                <span className="text-gray-500">
                  No, you can order as many as you like. You can also combine
                  multiple orders to get a longer video, so if you order 4 X 30
                  second packages, you may produce 1 X 120 second video or 4 x
                  30 second videos for example. Just let us know in the
                  questionnaire
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex transform hover:shadow-2xl  hover:scale-105 transition duration-200 ease-in">
            <div>
              <div className="flex items-center h-16 border-l-4 border-red-500">
                <span className="text-4xl text-red-500 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-red-500 font-bold">
                  What If I Don't Like The Video?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  Once we deliver your first video preview, you will be able to
                  make 2 rounds of animation changes free of charge.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex transform hover:shadow-2xl  hover:scale-105 transition duration-200 ease-in">
            <div>
              <div className="flex items-center h-16 border-l-4 border-red-500">
                <span className="text-4xl text-red-500 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-red-500 font-bold">
                  How Much Content Can Fit In 30 Seconds?
                </span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-gray-500">
                  A 30 second script is 75 words, so we can usually fit the
                  following sections: Problem Definition, Solution, Call To
                  Action. But don’t worry, if you want to make your video longer
                  during production, we can expand the length and budget with
                  your approval.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex transform hover:shadow-2xl  hover:scale-105 transition duration-200 ease-in">
            <div>
              <div className="flex items-center h-16 border-l-4 border-red-500">
                <span className="text-4xl text-red-500 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-red-500 font-bold">
                  I Want To Talk To Someone First...
                </span>
              </div>
              <div className=" items-center py-2">
                <span className="text-gray-500">
                  Off course! email{" "}
                  <span className="text-white">goanimatics@mail.com</span> and
                  we will answer any questions you may have.
                </span>
                <button className="text-white hover:bg-red-800 font-bold text-lg px-24 py-3 bg-red-500 rounded-xl mt-2">
                  <Link href="#pricing">GET STARTED</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
