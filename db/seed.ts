import { db, User} from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: 1,
			name: 'John',
			lastname: 'Doe',
			date: new Date(),
		},
		{
			id: 2,
			name: 'Jane',
			lastname: 'Doe',
			date: new Date(),
		}
	]
)
	
}
