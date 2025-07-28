"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  currentLang: string | undefined;
}
export default function Header({ currentLang }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "bn" : "en";
    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <>
      <div className="sticky top-0 z-50 border-b bg-white md:h-[65px]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
          <div className="items-center  gap-9 md:flex">
            <Link href="/" className="block h-[27px] w-[100px]">
              <Image
                src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                alt="10 Minute School Logo"
                width={100}
                height={27}
                priority
                className="transition-opacity duration-300 ease-in-out"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium text-sm">
              {currentLang === "en" ? "Switch to বাংলা" : "Switch to English"}
            </span>
            <button
              type="button"
              onClick={toggleLanguage}
              className={`relative inline-flex flex-shrink-0 h-6 w-10 border-2 border-transparent rounded-full cursor-pointer
            transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            ${currentLang === "bn" ? "bg-green-600" : "bg-gray-300"}`}
              role="switch"
              aria-checked={currentLang === "bn"}
              aria-label={`Toggle language to ${
                currentLang === "en" ? "Bengali" : "English"
              }`}
            >
              <span className="sr-only">Toggle language</span>

              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg
              transform ring-0 transition ease-in-out duration-200
              ${currentLang === "bn" ? "translate-x-4" : "translate-x-0"}`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
