import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, classes, skills, apparatuses, drills } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedSkills() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS skills (
      id SERIAL,
      name VARCHAR(255) NOT NULL,
      description TEXT DEFAULT 'tbd',
      apparatus VARCHAR(255) DEFAULT 'tbd',
      className TEXT DEFAULT 'tbd',
    );
  `;

  const insertedSkills = await Promise.all(
    skills.map(
      (skill) => client.sql`
        INSERT INTO skills (id, name, description, apparatus, className)
        VALUES (${skill.id}, ${skill.name}, ${skill.description}, ${skill.apparatus}, ${skill.className})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedSkills;
}

async function seedDrills() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS drills (
      id SERIAL,
      description TEXT NOT NULL,
      skill VARCHAR(255) NOT NULL,
      apparatus VARCHAR(255) NOT NULL,
      equipment VARCHAR(255) NOT NULL,
      purpose VARCHAR(255) NOT NULL,
    );
  `;

  const insertedDrills = await Promise.all(
    drills.map(
      (drill) => client.sql`
        INSERT INTO drills (description, skill, apparatus, equipment, purpose)
        VALUES (${drill.description}, ${drill.skill}, ${drill.apparatus}, ${drill.equipment, drill.purpose})
      `,
    ),
  );

  return insertedDrills;
}


async function seedClasses() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS classes (
      className VARCHAR(255) NOT NULL UNIQUE
    );
  `;

  const insertedClasses = await Promise.all(
    classes.map(
      (cla) => client.sql`
        INSERT INTO classes (className)
        VALUES (${cla})
        ON CONFLICT (cla) DO NOTHING;
      `,
    ),
  );

  return insertedClasses;
}

async function seedApparatuses() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS apparatuses (
      apparatus VARCHAR(255) NOT NULL UNIQUE
    );
  `;

  const insertedApparatuses = await Promise.all(
    apparatuses.map(
      (apparatus) => client.sql`
        INSERT INTO apparatuses (apparatus)
        VALUES (${apparatus.apparatus})
        ON CONFLICT (aapparatus) DO NOTHING;
      `,
    ),
  );

  return insertedApparatuses;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    //await seedUsers();
    await seedSkills();
    //await seedDrills();
    //await seedClasses();
    //await seedApparatuses();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
