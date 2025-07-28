import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex items-center h-[100vh]">
      <div className="container py-[120px] flex flex-col justify-center items-center bg-gray-100 px-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Dummy page — just checking if the middleware is working or not!
        </h1>
        <Link
          href="/"
          className="mt-4 inline-block px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
