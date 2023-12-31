import { useState } from "react";
import Toast from "./Toast";

export default function Pricing() {
  const [showToast, setshowToast] = useState(false);
  const [selectedPlan, setselectedPlan] = useState(1);
  const changeState = () => {
    setshowToast(false);
  };
  return (
    <>
      <div className="xl:mx-auto xl:container pt-10 pb-20 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
            <p className="text-base leading-4 text-white">Choose your plan</p>
            <h1
              role="heading"
              className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-white"
            >
              Become a Shopify Pro member!
            </h1>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-white"
            >
              We dont have any features on the site lol, but this is just some
              placeholder text. This would normally have a small description of
              the feature
            </p>
            <div className="w-56">
              <button
                onClick={() => setshowToast(true)}
                className="bg-indigo-700 text-white p-3 rounded-lg mt-3 hover:bg-indigo-800"
              >
                Buy Now!
              </button>

              {/* <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                <button
                  className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1"
                  id="monthly"
                >
                  Monthly
                </button>
                <button
                  className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6"
                  id="annually"
                >
                  Annually
                </button>
              </div> */}
            </div>
          </div>
          {showToast && <Toast changeState={changeState} isPricing={true} />}
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <img
              src="https://i.ibb.co/0n6DSS3/bgimg.png"
              className="absolute w-full -ml-12 mt-24"
              alt="background circle images"
            />
            <div
              onClick={() => setselectedPlan(0)}
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              {selectedPlan == 0 && (
                <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
              )}
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Trial
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    FREE<span className="font-normal text-base"></span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                  Full access to all features for a week
                </p>
              </div>
            </div>

            <div
              role="listitem"
              onClick={() => setselectedPlan(1)}
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              {selectedPlan == 1 && (
                <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
              )}
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Pro
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    $18<span className="font-normal text-base">/mo</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                  Few features to make the Pro Plus plan look cheaper than it
                  actually is
                </p>
              </div>
            </div>

            <div
              role="listitem"
              onClick={() => setselectedPlan(2)}
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              {selectedPlan == 2 && (
                <div className="w-2.5  h-auto bg-indigo-700 rounded-tl-md rounded-bl-md" />
              )}
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-800">
                    Pro Plus
                  </h2>
                  <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                    $20<span className="font-normal text-base">/mo</span>
                  </p>
                </div>
                <p className="md:w-80 text-base leading-6 mt-4 text-gray-600">
                  Unlimited products features and dedicated support channels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
