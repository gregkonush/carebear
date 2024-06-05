import { facilities, jobListings, locations } from "@/db/schema";
import { parse } from "papaparse";
import fs from "fs";
import { db } from "@/db";
import { exit } from "process";

type ScrapedJob = {
  title: string | undefined;
  description: string;
  location: string | undefined;
  min_amount: string;
  max_amount: string;
  company: string;
};

const file = fs.readFileSync(`${__dirname}/jobs_US.csv`, "utf8");
const csvJobs = parse<ScrapedJob>(file, { header: true });

csvJobs.data.forEach(async (job) => {
  if (!job || !job.title || !job.location) return;
  const [city, state] = job.location.split(", ");
  const location = await db
    .insert(locations)
    .values({ city, state })
    .returning({ id: locations.id });
  const company = job.company;
  const facility = await db
    .insert(facilities)
    .values({ name: company, locationId: location[0].id })
    .returning({ id: facilities.id });

  const rate = job.max_amount ?? job.description.split("$")[1].slice(0, 4);

  await db.insert(jobListings).values({
    jobTitle: job.title,
    facilityId: facility[0].id,
    rate,
    shift: "Full Time",
    description: job.description,
  });
});
