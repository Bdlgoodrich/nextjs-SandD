import { sql } from '@vercel/postgres';
import {
  User,
  Skill,
  Drill,
  Apparatus,
  Course,
} from './definitions';
import { formatLink } from './utils';

export async function fetchCourses() {
  try {
    const data = await sql<Course>`
      SELECT *
      FROM courses
      ORDER BY courses.name ASC;
    `;

    const courses = data.rows.map((course) => ({
      ...course,
    }));

    return courses;
} catch (error) {
  console.error('Database Error:', error);
  throw new Error('Failed to fetch class list.');
}
}

export async function fetchCourseNames() {
  let formattedName:String;
  try {
      const data = await sql<Course>`
        SELECT name
        FROM courses
        ORDER BY courses.name ASC;
      `;
  
      const courses = data.rows.map((course) => ({
        ...course,
      }));
      return courses.map((apparatus) => apparatus.name);

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch apparatus names.');
  }
}

export async function fetchApparatuses() {
  let formattedName:String;
  try {
      const data = await sql<Apparatus>`
        SELECT *
        FROM apparatuses
        ORDER BY apparatuses.name ASC;
      `;
  
      const apparatuses = data.rows.map((apparatus) => ({

        ...apparatus,
        imageLink: formatLink(apparatus.name),
      }));
  
      return apparatuses;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch class list.');
  }
}

export async function fetchEventApparatuses() {
  let formattedName:String;
  try {
      const data = await sql<Apparatus>`
        SELECT *
        FROM apparatuses
        WHERE type = 'event'
        ORDER BY apparatuses.name ASC;
      `;
  
      const apparatuses = data.rows.map((apparatus) => ({

        ...apparatus,
        imageLink: formatLink(apparatus.name),
      }));
  
      return apparatuses;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch class list.');
  }
}

export async function fetchEventApparatusNames() {
  let formattedName:String;
  try {
      const data = await sql<Apparatus>`
        SELECT name
        FROM apparatuses
        WHERE type = 'event'
        ORDER BY apparatuses.name ASC;
      `;
      const apparatuses = data.rows.map((apparatus) => ({
        ...apparatus,
      }));
      return apparatuses.map((apparatus) => apparatus.name);

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch apparatus names.');
  }
}

export async function fetchSkills() {
  try {
      const data = await sql<Skill>`
        SELECT *
        FROM skills;
      `;
  
      const skills = data.rows.map((skill) => ({
        ...skill,
      }));
  
      return skills;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch skills list.');
  }
}

export async function fetchDrills() {
  try {
      const data = await sql<Drill>`
        SELECT *
        FROM drills;
      `;
  
      const drills = data.rows.map((drill) => ({
        ...drill,
      }));
  
      return drills;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch drills list.');
  }
}

export async function fetchSkillsPages(query: string) {
  try {
    const ITEMS_PER_PAGE = 10;
    const count = await sql`SELECT COUNT(*)
    FROM skills
    WHERE
      skills.name ILIKE ${`%${query}%`} OR
      skills.description ILIKE ${`%${query}%`} OR
      skills.apparatus ILIKE ${`%${query}%`} OR
      skills.course ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of skills.');
  }
}

export async function fetchDrillsPages(query: string) {
  try {
    const ITEMS_PER_PAGE = 10;
    const count = await sql`SELECT COUNT(*)
    FROM drills
    WHERE
      drills.skill ILIKE ${`%${query}%`} OR
      drills.description ILIKE ${`%${query}%`} OR
      drills.instructions ILIKE ${`%${query}%`} OR
      drills.apparatus ILIKE ${`%${query}%`} OR
      drills.equipment ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of drills.');
  }
}

export async function fetchCoursesPages(query: string) {
  try {
    const ITEMS_PER_PAGE = 10;
    const count = await sql`SELECT COUNT(*)
    FROM courses
    WHERE
      courses.name ILIKE ${`%${query}%`} OR
      courses.description ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of classes.');
  }
}

export async function fetchSkillById(id: string) {
  try {
    const data = await sql<Skill>`
      SELECT *
      FROM skills
      WHERE skill.id = ${id};
    `;

    const skill = data.rows.map((skill) => ({
      ...skill,
    }));

    return skill[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch skill.');
  }
}

export async function fetchDrillById(id: string) {
  try {
    const data = await sql<Drill>`
      SELECT *
      FROM skills
      WHERE skill.id = ${id};
    `;

    const drills = data.rows.map((drill) => ({
      ...drill,
    }));

    return drills[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch drill.');
  }
}


export async function fetchFilteredSkills(query: string, currentPage: number) {
  try {
    const data = await sql<Skill>`
		SELECT *
		FROM skills
    WHERE
      skills.name ILIKE ${`%${query}%`} OR
      skills.description ILIKE ${`%${query}%`} OR
      skills.apparatus ILIKE ${`%${query}%`} OR
      skills.course ILIKE ${`%${query}%`}
		ORDER BY skills.name ASC
	  `;

    const skills = data.rows.map((result) => ({
      ...result,
    }));

    return skills;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filtered skills.');
  }
}

export async function fetchFilteredDrills(query: string, currentPage: number) {
  try {
    const data = await sql<Drill>`
		SELECT *
		FROM drills
    WHERE
      drills.skill ILIKE ${`%${query}%`} OR
      drills.description ILIKE ${`%${query}%`} OR
      drills.equipment ILIKE ${`%${query}%`} OR
      drills.apparatus ILIKE ${`%${query}%`} OR
      drills.equipment ILIKE ${`%${query}%`}
	  `;

    const drills = data.rows.map((result) => ({
      ...result,
    }));

    return drills;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filtered drills.');
  }
}

export async function fetchFilteredCourses(query: string, currentPage: number) {
  try {
    const data = await sql<Course>`
		SELECT *
		FROM courses
    WHERE
      courses.name ILIKE ${`%${query}%`} OR
      courses.description ILIKE ${`%${query}%`}
	  `;

    const courses = data.rows.map((result) => ({
      ...result,
    }));

    return courses;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filtered classes.');
  }
}