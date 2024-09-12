import React from "react";
import logo from "./logo.png";
import {Link} from "react-router-dom";
import microsoft from "./microsoft.svg"
import bissell from "./bissell.svg"
import airbnb from "./airbnb.svg"

const Home = () => {
  return (
    <>
      <div className="grid items-center justify-center gap-4 grid-cols-2 grid-rows-1 w-full h-72">
        <div>
          <h1 className="m-4">
            <span className="flex justify-center text-6xl relative font-semibold">
              How work
            </span>
            <br />
            <span className="flex justify-center text-6xl font-semibold">
              should work
            </span>
          </h1>
          <p className="flex justify-center text-gray-500 text-xl ">
            Forget the old rules. You can have the best people.
            <br />
            Right now. Right here.
          </p>
        </div>
        <div className=" max-w-1/2 max-h-screen flex justify-center items-center">
          <img
            className="w-80 h-60"
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className=" w-1/2 flex justify-center">
      <Link to="/login"><button className="relative top-3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none ">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Get started
        </span>
      </button>
      </Link>
      </div>

      <div data-qa="logo-items" className="lg-screen-container logos air3-grid-container gap-10">
        <figure className="">
          <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/microsoft.svg" data-qa="microsoft" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/microsoft.svg" alt="Microsoft worked with Upwork to collaborate on an integrated solution that helps enterprises work with freelancers at scale powered by Microsoft 365 and Upwork Enterprise." className="logo microsoft first-image lazyloaded"/>
          </figure>
          <figure className="">
            <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/airbnb.svg" data-qa="airbnb" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/airbnb.svg" alt="Airbnb works with Upwork to post more than 10,000 projects on Upwork." className="logo airbnb lazyloaded"/>
            </figure>
            <figure className="">
              <img src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/bissell.svg" data-qa="bissell" data-src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/bissell.svg" alt="Bissell works with Upwork as a staffing alternative to their hiring process." className="logo bissell lazyloaded"/>
              </figure>
              </div>

      {/* //.............................REVIEWS STARTS HERE..................................... */}

      {/* <div className='w-full h-36 bg-red-700 text-white'>
      reviews
    </div> */}
      {/* //................................CARD STARTS HERE.................................... */}

      {/* <div className="max-w-full flex flex-row">
      <div className="w-64 h-2/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={logo512}
            alt="not found"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={logo512}
            alt="not found"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={logo512}
            alt="not found"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Home;
