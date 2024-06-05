import { sql } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const jobListings = pgTable("job_listings", {
  id: uuid("id").primaryKey(),
  jobTitle: varchar("job_title", { length: 255 }).notNull(),
  facility: varchar("facility", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  createdAt: serial("created_at").notNull(),
  updatedAt: serial("updated_at").notNull(),
});

export const facilities = pgTable("facilities", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  createdAt: serial("created_at").notNull(),
  updatedAt: serial("updated_at").notNull(),
});

export const facilityRelations = relations(facilities, ({ many }) => ({
  jobListings: many(jobListings),
}));
