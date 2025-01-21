import { defineDb, defineTable, column, NOW } from 'astro:db';
// https://astro.build/db/config

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    lastname: column.text(),
    date: column.date({ default: NOW }),
  },
});

const Cuenta = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    balance: column.number(),
    usuer_id: column.number( {
      references: () => User.columns.id
    }),
  }
});

export default defineDb({
  tables: {
    User,
    Cuenta,
  }
});
