export default function Pricing() {
  return (
    <div
      id="pricing"
      className="antialiased w-full h-full border-t border-red-500 bg-black text-gray-400 font-inter p-10"
    >
      <div className="container px-4 mx-auto">
        <div>
          <div id="title" className="text-center my-10">
            <h1 className="font-bold text-4xl text-red-500">Pricing Plans</h1>
            <p className="text-light text-gray-500 text-xl">
              Here are our pricing plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 ">
            <div
              id="plan"
              className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl  hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-red-500">
                <h2 className="font-bold text-3xl text-white">Whiteboard</h2>

                <h3 className="font-normal text-red-500 text-xl mt-2">
                  $589/month
                </h3>
              </div>
              <div id="content" className="">
                <div id="icon" className="flex  items-center justify-center">
                  <iframe
                    className="rounded-2xl"
                    width="300"
                    height="260"
                    src="https://player.vimeo.com/video/756360442"
                    allow=" fullscreen"
                    allowFullScreen=""
                    __idm_id__="8192001"
                  ></iframe>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul className="hover:text-white transform  transition duration-200 ease-in">
                    <li>High Converting Script</li>
                    <li>Powerful Voice-Over</li>
                    <li>Engaging Animation</li>
                    <li>Music & SFX</li>
                    <li>14-24 Days Delivery</li>
                    <li className="line-through">Custom Graphics</li>
                    <li className="line-through decoration-red-500">
                      Premium Animation Team
                    </li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6">
                    <a
                      href="#"
                      className="border border-red-500 w-full block text-red-500 bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-red-500 hover:text-white"
                    >
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="plan"
              className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-red-500">
                <h2 className="font-bold text-3xl text-white">Explainer</h2>
                <h3 className="font-normal text-red-500 text-xl mt-2">
                  $1000/month
                </h3>
              </div>
              <div id="content" className="">
                <div id="icon" className="flex  items-center justify-center">
                  <iframe
                    className="rounded-2xl"
                    width="300"
                    height="260"
                    src="https://player.vimeo.com/video/825608999?h=123f94cbc1"
                    allow=" fullscreen"
                    allowFullScreen=""
                    __idm_id__="8192001"
                  ></iframe>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul className="hover:text-white transform  transition duration-200 ease-in">
                    <li>High Converting Script</li>
                    <li>Powerful Voice-Over</li>
                    <li>Engaging Animation</li>
                    <li>Music & SFX</li>
                    <li>7-14 Days Delivery</li>
                    <li className="line-through">Custom Graphics</li>
                    <li className="line-through">Premium Animation Team</li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6">
                    <a
                      href="https://improveman.samcart.com/products/pro-plan"
                      target="_blank"
                      className="border border-red-500 w-full text-red-500 block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-red-500 hover:text-white"
                      rel="noreferrer"
                    >
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="plan"
              className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-red-500">
                <h2 className="font-bold text-3xl text-white">Premium</h2>
                <h3 className=" text-red-500 text-xl mt-2">$1500/month</h3>
              </div>
              <div id="content" className="">
                <div id="icon" className="flex  items-center justify-center">
                  <iframe
                    className="rounded-2xl"
                    width="300"
                    height="260"
                    src="https://player.vimeo.com/video/825610601?h=f4a70716a4"
                    allow=" fullscreen"
                    allowFullScreen=""
                    __idm_id__="8192001"
                  ></iframe>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul className="hover:text-white transform  transition duration-200 ease-in">
                    <li>High Converting Script</li>
                    <li>Powerful Voice-Over</li>
                    <li>Engaging Animation</li>
                    <li>Music & SFX</li>
                    <li>7-14 Days Delivery</li>
                    <li>Custom Graphics</li>
                    <li>Premium Animation Team</li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6 ">
                    <a
                      href="https://improveman.samcart.com/products/enterprise-plan"
                      target="_blank"
                      className="border border-red-500 w-full block text-red-500 bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-red-500 hover:text-white"
                      rel="noreferrer"
                    >
                      BUY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
