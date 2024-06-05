import { sql } from "drizzle-orm";
import { pgTable, timestamp, unique, uuid, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const jobListings = pgTable("job_listings", {
  id: uuid("id").primaryKey().defaultRandom(),
  jobTitle: varchar("job_title", { length: 255 }).notNull(),
  facilityId: uuid("facility_id").notNull(),
  rate: varchar("rate", { length: 255 }),
  shift: varchar("shift", { length: 255 }).notNull(),
  description: varchar("description").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const jobListingsRelations = relations(jobListings, ({ one }) => ({
  facility: one(facilities, {
    fields: [jobListings.facilityId],
    references: [facilities.id],
  }),
}));

export const facilities = pgTable("facilities", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  locationId: uuid("location_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const facilityRelations = relations(facilities, ({ many, one }) => ({
  jobListings: many(jobListings),
  location: one(locations, {
    fields: [facilities.locationId],
    references: [locations.id],
  }),
}));

export const locations = pgTable(
  "locations",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    city: varchar("city", { length: 255 }).notNull(),
    state: varchar("state", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  }
);
