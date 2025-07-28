import Breadcrumb from "../components/sections/Breadcrumb";
import Header from "../components/sections/Header";
import MainContent from "../components/sections/MainContent";
import { CourseApiResponse } from "../types/course-types";

interface HomeProps {
  params: Promise<{ lang: string }>; 
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export default async function Home({ params: paramsPromise }: HomeProps) {
  const params = await paramsPromise; 

  const currentLang = params.lang === "bn" ? "bn" : "en";

  const res = await fetch(`${API_BASE_URL}?lang=${currentLang}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch course data");
  }

  const result: CourseApiResponse = await res.json();

  return (
    <main className="min-h-[600px]">
      <Header currentLang={currentLang} />
      <Breadcrumb data={result?.data} />
      <MainContent data={result?.data} />
    </main>
  );
}
