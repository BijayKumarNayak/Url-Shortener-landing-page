import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLongUrl("");
    try {
      const response = await axios.post(
        "https://api.rebrandly.com/v1/links",
        {
          destination: longUrl,
        },
        {
          headers: {
            apikey: apiKey,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="font-sans ">
      <div className="px-4 md:px-12 lg:px-24">
        <nav className="flex items-center justify-between py-4 ">
          <div className="flex items-center ">
            <div className="h-7">
              <img src="/images/logo.svg" alt="" className="h-full" />
            </div>
            <div className="hidden md:block ms-6">
              <ul className="flex items-center gap-4 font-bold cursor-pointer ">
                <li className="text-gray-400 hover:text-black">Features</li>
                <li className="text-gray-400 hover:text-black">Pricing</li>
                <li className="text-gray-400 hover:text-black">Resources</li>
              </ul>
            </div>
          </div>

          <button className="hidden px-4 py-1 font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:block">
            Login/SignUp
          </button>

          <div className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
            <i className="w-8 h-8 fa-solid fa-bars"></i>
          </div>
          {isOpen && (
            <div className="absolute right-0 p-5 top-12 bg-slate-400">
              {" "}
              <ul>
                <li className="mb-3 font-semibold text-gray-800">Features</li>
                <li className="mb-3 font-semibold text-gray-800">Pricing</li>
                <li className="mb-3 font-semibold text-gray-800">Resources</li>

                <li className="mb-3">
                  <button className="px-4 py-1 font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 md:block">
                    Login/SignUp
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>

      <div className="flex flex-col-reverse items-center px-5 py-5 md:py-10 md:flex-row md:px-12 lg:px-24">
        <div className="text-center md:pr-10 md:text-start">
          <h1 className="text-5xl font-bold text-gray-900 md:text-6xl ">
            <span className="text-cyan-500">M</span>ore than just shorter links
          </h1>
          <p className="mt-3 text-lg font-semibold text-gray-400 md:text-base">
            Build your brand&apos;s recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="px-4 py-1 mt-5 font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="images/illustration-working.svg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="px-5 pb-10 bg-slate-300 lg:px-24 md:px-12">
        <form
          className="relative flex flex-col items-center justify-center gap-4 p-3 md:gap-10 md:flex-row md:h-20 bg-indigo-950 md:p-1"
          onSubmit={handleSubmit}
        >
          <img
            src="/images/bg-shorten-desktop.svg"
            alt=""
            className="absolute top-0 left-0 z-0 w-full h-full"
          />
          <input
            type="text"
            className="z-10 h-10 md:w-[70%] w-full  rounded-md px-4 py-3 focus:outline-none "
            placeholder="Shorten a link here"
            required
            onChange={(e) => setLongUrl(e.target.value)}
            value={longUrl}
          />
          <button
            type="submit"
            className="z-10 w-full px-4 py-2 font-semibold text-white rounded-md md:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >
            Get Started
          </button>
        </form>
        {shortUrl && (
          <div className="mt-3 md:px-20">
            <div className="flex items-center justify-between bg-white rounded-md ">
              <p className="font-semibold ms-3">{shortUrl}</p>
              <button
                className="w-full px-4 py-2 font-semibold text-white rounded-md md:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                onClick={handleCopy}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}
          </div>
        )}

        <div>
          <div className="mt-20 text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Advanced statistics
            </h1>
            <p className="mt-3 text-lg font-semibold text-gray-500 md:text-base">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-10 mt-16 lg:mt-5 md:mt-10 md:flex-row ">
            <div className="z-0 w-full text-center bg-white rounded-md md:w-72 h-72 md:text-start">
              <div className="z-10 flex items-center justify-center w-16 h-16 mx-auto -mt-8 rounded-full md:ms-8 bg-indigo-950">
                <img
                  src="/images/icon-brand-recognition.svg"
                  alt=""
                  className="h-10"
                />
              </div>
              <div className="p-5 mt-5 text-center md:text-start ">
                <h3 className="text-2xl font-bold text-gray-800 md:text-xl">
                  Brand Recognition
                </h3>
                <p className="mt-4 text-lg font-semibold text-gray-400 md:text-sm">
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>

            <div className="z-0 w-full text-center bg-white rounded-md md:text-start md:mt-10 md:w-72 h-72">
              <div className="z-10 flex items-center justify-center w-16 h-16 mx-auto -mt-8 rounded-full md:ms-8 bg-indigo-950">
                <img
                  src="/images/icon-detailed-records.svg"
                  alt=""
                  className="h-10"
                />
              </div>
              <div className="p-5 mt-5 ">
                <h3 className="text-2xl font-bold text-gray-800 md:text-xl">
                  Detail Records
                </h3>
                <p className="mt-4 text-lg font-semibold text-gray-400 md:text-sm">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>

            <div className="w-full text-center bg-white rounded-md md:text-start md:mt-20 md:w-72 h-72">
              <div className="flex items-center justify-center w-16 h-16 mx-auto -mt-8 rounded-full md:ms-8 bg-indigo-950">
                <img
                  src="/images/icon-fully-customizable.svg"
                  alt=""
                  className="h-10"
                />
              </div>
              <div className="p-5 mt-5 ">
                <h3 className="text-xl font-bold text-gray-800">
                  Fully Customizable
                </h3>
                <p className="mt-4 text-lg font-semibold text-gray-400 md:text-sm">
                  Improve brand awareness and content discoverability througn
                  customozable links. Supercharging audiance engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center h-40 bg-indigo-950">
        <img
          src="/images/bg-boost-desktop.svg"
          alt=""
          className="absolute top-0 left-0 z-0 object-cover w-full h-full"
        />
        <div className="z-10 m-auto text-center">
          <h1 className="mb-5 text-4xl font-bold text-white">
            Boost your links today
          </h1>
          <button className="px-4 py-1 mx-auto font-semibold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
            Get Started
          </button>
        </div>
      </div>

      <footer className="relative pt-8 pb-6 bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="mx-auto md:px-24 ">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl text-white fonat-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="mt-0 mb-2 text-lg text-gray-400">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 mb-6 lg:mb-0">
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white border-2 rounded-full shadow-lg outline-none hover:border-cyan-500 text-lightBlue-400 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white border-2 rounded-full shadow-lg outline-none hover:border-cyan-500 text-lightBlue-600 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white border-2 rounded-full shadow-lg outline-none hover:border-cyan-500 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="items-center justify-center w-10 h-10 mr-2 font-normal bg-white border-2 rounded-full shadow-lg outline-none hover:border-cyan-500 text-blueGray-800 align-center focus:outline-none"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-wrap mb-6 items-top">
                <div className="w-full px-4 ml-auto lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold text-white ">
                    Features
                  </span>
                  <ul className="text-gray-400 list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-cyan-500"
                        href="#"
                      >
                        Link Shorting
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-cyan-500"
                        href="#"
                      >
                        Branded Links
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-cyan-500"
                        href="#"
                      >
                        Analytics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <span className="block mb-2 text-sm font-semibold text-white ">
                    Resources
                  </span>
                  <ul className="text-gray-400 list-unstyled">
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-cyan-500"
                        href="#"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-cyan-500"
                        href=""
                      >
                        Developers
                      </a>
                    </li>
                    <li>
                      <a
                        className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-cyan-500"
                        href="#"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
