import { JobListing } from "@/components";
import { Inter, Libre_Baskerville } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const libre = Libre_Baskerville({
  style: "italic",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className} antialiased`}
    >
      <header className="border-b border-b-gray-100 w-full py-5 shadow-sm bg-zinc-50 sticky top-0 z-10">
        <div className={`${libre.className} flex flex-row`}>
          <div className="px-4 text-transparent bg-clip-text py-1 bg-gradient-to-r from-emerald-600/90 to-sky-400/90 text-xl inline-block">
            Care Bear
          </div>
        </div>
      </header>
      <section className="flex-grow bg-zinc-100/40 w-full py-10">
        <div className="flex flex-col items-center">
          <ol className="space-y-4">
            <JobListing
              jobTitle="Primary Care (Nurse Practioner)"
              facilityName="Care Bear Hospital"
              location="San Francisco, CA"
              shift="Shift 1"
            />
            <JobListing
              jobTitle="Primary Care (Nurse Practioner)"
              facilityName="Care Bear Hospital"
              location="San Francisco, CA"
              shift="Shift 1"
            />
            <JobListing
              jobTitle="Primary Care (Nurse Practioner)"
              facilityName="Care Bear Hospital"
              location="San Francisco, CA"
              shift="Shift 1"
            />
            <JobListing
              jobTitle="Primary Care (Nurse Practioner)"
              facilityName="Care Bear Hospital"
              location="San Francisco, CA"
              shift="Shift 1"
            />
            <JobListing
              jobTitle="Primary Care (Nurse Practioner)"
              facilityName="Care Bear Hospital"
              location="San Francisco, CA"
              shift="Shift 1"
            />
            <JobListing
              jobTitle="Primary Care (Nurse Practioner)"
              facilityName="Care Bear Hospital"
              location="San Francisco, CA"
              shift="Shift 1"
            />
          </ol>
        </div>
      </section>
      <footer className="flex flex-row bg-zinc-50 justify-center text-xs text-gray-400 py-2 border-t border-t-gray-100 w-full">
        <div>Care Bear 2024, All rights reserved</div>
      </footer>
    </main>
  );
}
