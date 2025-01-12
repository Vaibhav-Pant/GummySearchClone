const Trending = () => {
  return (
    <div className="mx-auto p-5 bg-gray-800 rounded-md border-white max-w-3xl" style={{marginTop: "20px"}}>
      <div>
        <h2 className="flex items-center font-bold justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-yellow-400 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
          <div>Upgrade to use this feature</div>
        </h2>
        <div className="mt-4 bg-gray-700 rounded-md p-4">
          <div className="sm:flex sm:space-x-8">
            <div className="text-gray-200">
              <h3 className="font-bold text-lg">Trending Subreddits</h3>
              <div className="mt-2">
                See the top subreddits by activity, size, growth, and engagement.
                Filter to find new breakout communities &amp; niches.
              </div>
              <div className="py-2 sm:py-0">
                <a
                  href="#"
                  className="underline"
                >
                  More info
                </a>
              </div>
            </div>
            <iframe
              width="100%"
              height={150}
              src="https://www.youtube.com/embed/TUDM6gcoC28"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="sm:flex sm:space-x-8 space-y-4 sm:space-y-0">
            <div className="flex-1">
              <h3 className="font-bold text-lg">
                Trending Subreddits is included in <span>GummySearch Starter</span>{" "}
                plan
              </h3>
              <div className="py-1 text-gray-400 flex items-center opacity-75 hover:opacity-100 cursor-pointer font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                What else do I get with Starter?
              </div>
              <div className="py-1 text-gray-400 flex items-center opacity-75 hover:opacity-100 cursor-pointer font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                How does the Day Pass work?
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            <a
              className="items-center cursor-pointer font-bold justify-center w-full py-2 rounded-md hover:opacity-90 border text-white bg-cyan-500 border-transparent"
              href="#"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden sm:block w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                Buy Day Pass ($10)
              </div>
            </a>
            <button className="items-center cursor-pointer font-bold justify-center w-full py-2 rounded-md hover:opacity-90 border text-white bg-green-500 border-transparent">
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="hidden sm:block w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <div>Buy Starter ($29/mo)</div>
              </div>
            </button>
          </div>
          <div className="pt-4 text-sm text-center">
            <a
              className="underline opacity-60 hover:opacity-100"
              href="#"
            >
              Compare all pricing plans
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Trending

