import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Create, Connect, Celebrate: Your Event, Your Way, Right Away!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Expert <span className="font-bold">Guidance</span> , Endless{" "}
              <span className="font-bold">Possibilities</span>. Book and learn
              helpful tips from 765+ mentors in world class companies with our
              global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit my-4">
              <Link className="" href="#events">
                Dive into Possibility
              </Link>
            </Button>
          </div>
          <div className="flex justify-center items-center h-full rounded-lg ">
            <Image
              src="/assets/images/sectionimg.png"
              alt="hero"
              width={800}
              height={500}
              className="object-contain rounded-lg max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] "
            />
          </div>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Where Thousands of Events,
          <br /> Place Their Trust
        </h2>
        <div className="flex 2-full flex-col gap-5 md:flex-row">
          Search Category Filter
        </div>
      </section>
    </>
  );
}
