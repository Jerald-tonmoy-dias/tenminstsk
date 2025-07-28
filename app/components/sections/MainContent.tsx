import CouseInstructor from "../ui/CouseInstructor";
import CourseFeatures from "../ui/CourseFeatures";
import CourseInsight from "../ui/CourseInsight";
import CourseDetails from "../ui/CourseDetails";
import ExclusiveFeatures from "../ui/ExclusiveFeatures";
import { CourseData } from "@/app/types/course-types";

interface MainContentProps {
  data: CourseData;
}

export default function MainContent({ data }: MainContentProps) {
  const instructor = data?.sections.find((item) => item.type === "instructors");
  const features = data?.sections.find((item) => item.type === "features");
  const pointers = data?.sections.find((item) => item.type === "pointers");
  const about = data?.sections.find((item) => item.type === "about");
  const feature_explanations = data?.sections.find(
    (item) => item.type === "feature_explanations"
  );

  return (
    <>
      <main className="container flex flex-col gap-4 md:flex-row md:gap-12 ">
        <section className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <div>
            <div className="pt-[140px] -mt-[140px]">
              {instructor && <CouseInstructor data={instructor} />}
              {features && <CourseFeatures data={features} />}
              {pointers && <CourseInsight data={pointers} />}
              {feature_explanations && (
                <ExclusiveFeatures data={feature_explanations} />
              )}
              {about && <CourseDetails data={about} />}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
