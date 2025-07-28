"use client";
import { Section } from "@/app/types/course-types";
import { useState } from "react";
interface CourseDetailsProps {
  data: Section;
}

export default function CourseDetails({ data }: CourseDetailsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div id="about">
      <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px] ">
        <div className="mt-10 md:mt-0">
          <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
            {data?.name}
          </h2>
          <div className="rounded-lg py-2 md:border md:px-5 border-2  border-[#dbe1eb]">
            {data?.values?.map((item, index) => (
              <details
                key={item?.id}
                open={openIndex === index}
                className="mb-0 border-b border-[#dbe1eb] border-dashed last:border-none relative"
              >
                <summary
                  className="py-4 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault(); // prevent default toggle
                    toggle(index);
                  }}
                >
                  <div
                    className="max-w-[90%] font-medium md:text-base mx-lg:text-sm"
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  ></div>
                </summary>
                <div className="px-0 pb-2 text-gray-500">
                  <div
                    className="prose prose-ul:pl-4"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
