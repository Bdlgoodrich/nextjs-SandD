import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, classNames, skills, apparatuses, drills } from '../lib/placeholder-data';

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
        INSERT INTO users (name, email, password)
        VALUES (${user.name}, ${user.email}, ${hashedPassword})
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
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT DEFAULT 'tbd',
      apparatus VARCHAR(255) DEFAULT 'tbd',
      group VARCHAR(255) DEFAULT 'tbd',
      imageLink VARCHAR(255) DEFAULT '/coming-soon-image.jpg',
      videoLink VARCHAR(255) DEFAULT 'tbd'
    );
  `;

  const insertedSkills = await Promise.all(
    skills.map(
      (skill) => client.sql`
        INSERT INTO skills (name, description, apparatus, className)
        VALUES (${skill.name}, ${skill.description}, ${skill.apparatus}, ${skill.className})
      `,
    ),
  );

  return insertedSkills;
}

async function seedDrills() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS drills (
      id SERIAL,
      description VARCHAR(255) NOT NULL UNIQUE,
      skill VARCHAR(255) NOT NULL,
      instructions TEXT DEFAULT 'tbd',
      apparatus VARCHAR(255) DEFAULT 'tbd',
      equipment VARCHAR(255) DEFAULT 'tbd',
      purpose VARCHAR(255) NOT NULL,
      imageLink VARCHAR(255) DEFAULT '/coming-soon-image.jpg',
      videoLink VARCHAR(255) DEFAULT 'tbd'
    );
  `;

  const insertedDrills = await Promise.all(
    drills.map(
      (drl) => client.sql`
        INSERT INTO drills (description, skill, instructions, apparatus, equipment, purpose)
        VALUES (${drl.description}, ${drl.skill}, ${drl.instructions}, ${drl.apparatus}, ${drl.equipment}, ${drl.purpose})
      `,
    ),
  );

  return insertedDrills;
}


async function seedCourses() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT DEFAULT 'tbd',
      ages VARCHAR(255) DEFAULT '3-99'
    );
  `;

  const insertedCourses = await Promise.all(
    courses.map(
      (course) => client.sql`
        INSERT INTO courses (name)
        VALUES (${course.name})
      `,
    ),
  );

  return insertedCourses;
}

async function seedApparatuses() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS apparatuses (
      id SERIAL,
      apparatus VARCHAR(255) NOT NULL UNIQUE,
      description VARCHAR(255) NOT NULL,
      imageLink VARCHAR(255) DEFAULT '/coming-soon-image.jpg'
    );
  `;

  const insertedApparatuses = await Promise.all(
    apparatuses.map(
      (appa) => client.sql`
        INSERT INTO apparatuses (apparatus, description)
        VALUES (${appa.apparatus}, ${appa.description})
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
    await seedUsers();
    await seedSkills();
    await seedDrills();
    await seedClassNames();
    await seedApparatuses();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
