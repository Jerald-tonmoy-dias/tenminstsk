import React from 'react'

export default function StickySlider() {
  return (
       <div className="sticky top-[65px] z-20 hidden bg-white md:block">
              <div className="tenms-carousel relative  light right">
                <div className="w-full overflow-hidden">
                  <div className="absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      fill="none"
                      viewBox="0 0 33 32"
                      className="xl:mr-[-40px]"
                    >
                      <path
                        fill="#000"
                        fillOpacity="0.5"
                        fillRule="evenodd"
                        d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={33}
                      height={32}
                      fill="none"
                      viewBox="0 0 33 32"
                      className="rotate-180 xl:ml-[-40px]"
                    >
                      <path
                        fill="#000"
                        fillOpacity="0.5"
                        fillRule="evenodd"
                        d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                  <ul className="flex my-4 border-b flex-nowrap">
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button />
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button />
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button>কোর্স ইন্সট্রাক্টর</button>
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button>কোর্সটি যেভাবে সাজানো হয়েছে</button>
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button />
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button>কোর্সটি করে যা শিখবেন</button>
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button>কোর্স সম্পর্কে বিস্তারিত</button>
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button>কোর্স এক্সক্লুসিভ ফিচার</button>
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button>এই কোর্সের সাথে ফ্রি পাচ্ছেন–</button>
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button>শিক্ষার্থীরা যা বলছে</button>
                    </li>
                    <li className="text-nowrap p-2 text-base  text-gray-600 ">
                      <button>সচরাচর জিজ্ঞাসা</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  )
}
