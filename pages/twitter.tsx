import Image from 'next/image'

function Twitter() {
  return (
    <div className="bg-black">
      <header className="flex items-center py-2 pl-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-8">
          <h2 className="text-gray-300 font-bold text-xl">Phan Công Thắng</h2>
          <p className="text-gray-400 text-xs">22 Tweets</p>
        </div>
      </header>
      <main className="">
        <div className="bg-gray-700 h-40" />
        <div className="px-2">
          <div className="flex justify-between pt-2">
            <div className="" style={{marginTop: '-50px'}}>
              <div>
                <Image
                  src={'/profile_img.jpeg'}
                  width={100}
                  height={100}
                  className="rounded-full absolute "
                />
              </div>
            </div>
            <div>
              <button className="text-white border font-bold rounded-3xl px-4 py-1">
                Edit profile
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-white">Phan Công Thắng</h2>
            <p className="text-gray-400">@thang_zenitsu</p>
          </div>
          <p>🚀</p>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-gray-500">Tokyo, Japan</span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6  mx-2"
              stroke="gray"
            >
              <g>
                <path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"></path>
                <path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"></path>
              </g>
            </svg>
            <span className="text-gray-500">Born August 10, 1996</span>
          </div>
          <div className="flex mt-1">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 mr-1"
              stroke="gray"
            >
              <g>
                <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
                <circle cx="7.032" cy="8.75" r="1.285"></circle>
                <circle cx="7.032" cy="13.156" r="1.285"></circle>
                <circle cx="16.968" cy="8.75" r="1.285"></circle>
                <circle cx="16.968" cy="13.156" r="1.285"></circle>
                <circle cx="12" cy="8.75" r="1.285"></circle>
                <circle cx="12" cy="13.156" r="1.285"></circle>
                <circle cx="7.032" cy="17.486" r="1.285"></circle>
                <circle cx="12" cy="17.486" r="1.285"></circle>
              </g>
            </svg>
            <span className="text-gray-500">Joined April 2020</span>
          </div>
          <div className="flex space-x-2 my-2">
            <div>
              <span className="text-white mr-1">71</span>
              <span className="text-gray-500 text-sm">Following</span>
            </div>
            <div>
              <span className="text-white mr-1">2</span>
              <span className="text-gray-500 text-sm">Followers</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="">
        <div className="flex justify-around border py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </footer>
    </div>
  )
}

export default Twitter
