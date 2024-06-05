import type { NextApiRequest, NextApiResponse } from "next";
import { facilities, jobListings, locations } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await db
    .select({
      id: jobListings.id,
      jobTitle: jobListings.jobTitle,
      facility: facilities.name,
      location: {
        city: locations.city,
        state: locations.state,
      },
      shift: jobListings.shift,
      rate: jobListings.rate,
    })
    .from(jobListings)
    .innerJoin(facilities, eq(jobListings.facilityId, facilities.id))
    .innerJoin(locations, eq(facilities.locationId, locations.id))
    .orderBy(jobListings.createdAt);
  console.log(data);
  res.status(200).json({ listings: data });
}
