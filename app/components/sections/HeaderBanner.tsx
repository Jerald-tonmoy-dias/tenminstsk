import Image from "next/image";
import Link from "next/link";

export default function HeaderBanner() {
  return (
    <div className="relative z-[2] aspect-auto">
      <div style={{ background: "#02090B" }}>
        <div className="relative">
          <div>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center relative z-[1]"
            >
              <div>
                <Image
                  alt="banner image desktop"
                  src="https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png?w=1800"
                  width={1800}
                  height={150}
                  className="hidden w-auto sm:block"
                  unoptimized
                />
              </div>
              <div>
                <Image
                  alt="banner image mobile"
                  src="https://cdn.10minuteschool.com/images/mobile_banner_1753355543677.png?w=768"
                  width={768}
                  height={143}
                  className="w-auto sm:hidden"
                  unoptimized
                />
              </div>
            </a>

            <Link href="/">
              <svg
                className="absolute z-10 w-2 h-2 cursor-pointer right-2 top-1 md:top-2 md:h-3 md:w-3"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.410704 0.410734C0.736141 0.0852972 1.26378 0.0852972 1.58921 0.410734L5.99996 4.82148L10.4107 0.410734C10.7361 0.0852972 11.2638 0.0852972 11.5892 0.410734C11.9147 0.736171 11.9147 1.26381 11.5892 1.58925L7.17847 5.99999L11.5892 10.4107C11.9147 10.7362 11.9147 11.2638 11.5892 11.5892C11.2638 11.9147 10.7361 11.9147 10.4107 11.5892L5.99996 7.1785L1.58921 11.5892C1.26378 11.9147 0.736141 11.9147 0.410704 11.5892C0.0852667 11.2638 0.0852667 10.7362 0.410704 10.4107L4.82145 5.99999L0.410704 1.58925C0.0852667 1.26381 0.0852667 0.736171 0.410704 0.410734Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
