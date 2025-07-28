import React from "react";
import { CourseData } from "../../types/course-types";
import MobileCourseGallery from "../mobile/MobileCourseGallery";
import MobileCourseChecklist from "../mobile/MobileCourseChecklist";
import DesktopCourseGallery from "../desktop/DesktopCourseGallery";
import DesktopCourseChecklist from "../desktop/DesktopCourseChecklist";

interface BreadcrumbProps {
  data: CourseData;
}

export default function Breadcrumb({ data }: BreadcrumbProps) {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="skills-landing"
        className="min-h-[300px] md:min-h-[300px] "
      >
        <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
          <div className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] ">
            {data?.media && <MobileCourseGallery media={data?.media} />}
            <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
              {data?.title}
            </h1>

            <div
              className="text-gray-400 "
              style={{
                overflow: "hidden",
                height: "auto",
                maskImage: "none",
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: data?.description }}
              ></div>
            </div>
          </div>
          <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2  bg-white absolute right-0 md:top-[50px] ">
            <div className="md:sticky md:top-[112px]">
              <div className=" md:border">
                {data?.media && <DesktopCourseGallery media={data?.media} />}
                <DesktopCourseChecklist cta={data?.cta_text} data={data.checklist} />
              </div>
            </div>
          </section>
        </div>
      </div>
      <MobileCourseChecklist cta={data?.cta_text} data={data.checklist} />
    </>
  );
}
