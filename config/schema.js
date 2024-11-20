
import { integer, pgTable, serial, varchar, } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull().unique(),
  imageUrl: varchar('imageUrl').notNull(),
  credits: integer('credits').notNull().default(3),
});



export const AiGeneratedAi = pgTable("AiGeneratedAi", {
    id: serial("id").primaryKey(),
    roomType: varchar('roomType').notNull(),
    designType: varchar('designType').notNull(),
    orgImage: varchar('orgImage').notNull(),
    aiimage: varchar('aiimage').notNull(),
    userEmail: varchar('userEmail').notNull(),
  });