import { ChecklistItem, CtaText } from "@/app/types/course-types";
import Image from "next/image";

import React from "react";

interface MobileCourseChecklistProps {
  data: ChecklistItem[];
  cta: CtaText;
}

export default function MobileCourseChecklist({
  data,
  cta,
}: MobileCourseChecklistProps) {
  return (
    <>
      <div className="block md:hidden">
        <div className="" data-device-type="mobile">
          <span style={{ fontSize: 0 }} />
          <div className="w-full p-4 md:h-auto" id="variant">
            <div className="relative md:static ">
              <div>
                <div className="flex flex-col w-full">
                  <div>
                    <div className="flex items-center justify-between md:flex-col md:items-start">
                      <div className="md:mb-3">
                        <div className="inline-block text-2xl font-semibold">
                          ৳1000
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2" />
                  </div>

                  <button className=" bg-green-500 transition duration-300 ease-in-out rounded-[4px] whitespace-nowrap  md:w-full text-center">
                    {cta.name}
                  </button>
                </div>
              </div>
              <div className="absolute md:static top-[-45px] left-0 ">
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block px-4 bg-white md:hidden">
        <div className="grid py-2 md:p-4">
          <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
          {data?.map((item) => (
            <div key={item.id}>
              <div className="flex items-center mb-3 leading-5">
                <div
                  className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <Image
                    alt="img"
                    width={20}
                    height={20}
                    style={{ color: "transparent" }}
                    src={item.icon}
                  />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                  {item.text}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
