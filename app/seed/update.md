import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, courses, skills, apparatuses, drills } from '../lib/placeholder-data';

const client = await db.connect();

async function updateSkills() {
    const insertedSkills = await Promise.all(
      skills.map(
        (skill) => client.sql`
          UPDATE skills SET sills.description = ${skill.description}
          WHERE skills.name = ${skill.name}
        `,
      ),
    );
  
    return insertedSkills;
  }

  async function seedApparatuses() {
    await client.sql`
      CREATE TABLE IF NOT EXISTS apparatuses (
        id SERIAL,
        apparatus VARCHAR(255) NOT NULL UNIQUE,
        description VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        imageLink VARCHAR(255) NOT NULL
      );
    `;
  
    const insertedApparatuses = await Promise.all(
      apparatuses.map(
        (appa) => client.sql`
          INSERT INTO apparatuses (apparatus, description, type, inageLink)
          VALUES (${appa.apparatus}, ${appa.description}, ${appa.type}, ${appa.imageLink})
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
      await updateSkills();
      //await seedDrills();
      //await seedcourses();
      await seedApparatuses();
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }