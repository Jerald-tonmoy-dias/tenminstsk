"use client";
import { MediaItem } from "@/app/types/course-types";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Video from "../ui/Video";

interface DesktopCourseGalleryProps {
  media: MediaItem[];
}

export default function DesktopCourseGallery({
  media,
}: DesktopCourseGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="hidden md:block p-1">
      <div className="relative aspect-video bg-black">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Thumbs]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full h-full"
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                {item.resource_type === "video" ? (
                  activeIndex === index ? (
                    <Video
                      key={item?.resource_value}
                      value={item?.resource_value}
                     
                    />
                  ) : (
                    <Image
                      src={item.thumbnail_url || ""}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      width={300}
                      height={300}
                    />
                  )
                ) : (
                  <Image
                    src={item.resource_value}
                    alt={item.name}
                    className="w-full h-full object-cover"
                      width={300}
                      height={300}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrows */}
        <div className="absolute left-[10px] top-1/2 z-10 -translate-y-1/2 custom-prev cursor-pointer">
          {/* Left arrow icon */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            color="white"
            style={{ color: "white" }}
            height={25}
            width={25}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
          </svg>
        </div>
        <div className="absolute right-[10px] top-1/2 z-10 -translate-y-1/2 custom-next cursor-pointer">
          {/* Right arrow icon */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            color="white"
            style={{ color: "white" }}
            height={25}
            width={25}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
          </svg>
        </div>
      </div>

      {/* Thumbnails */}
      <Swiper
        className="mt-4 overflow-x-auto"
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          480: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
      >
        {media.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[55px] overflow-hidden cursor-pointer"
          >
            <div
              className={`relative w-full h-[50px] rounded overflow-hidden border-[2px]  ${
                activeIndex == index
                  ? "  border-[#1CAB55]"
                  : "border-transparent"
              }`}
            >
              <Image
                src={
                  item.resource_type === "video"
                    ? item.thumbnail_url || item.resource_value
                    : item.resource_value
                }
                alt="preview"
                width={86}
                height={50}
                className=" rounded object-cover h-[38px] p-[2px]"
              />
              {item.resource_type === "video" && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    alt="play icon"
                    width={20}
                    height={20}
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
