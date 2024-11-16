
import { integer, pgTable, serial, varchar ,} from "drizzle-orm/pg-core";

 export const users = pgTable("users", {
   id: serial("id").primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull().unique(),
  imageUrl: varchar('imageUrl').notNull(),
  credits: integer('credits').notNull().default(3 ),
});
