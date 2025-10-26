import { sql } from '@vercel/postgres';
import {
  User,
  Skill,
  Drill,
  Apparatus,
  Course,
  Game,
} from './definitions';
import { formatLink } from './utils';

const ITEMS_PER_PAGE = 10;

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

export async function fetchFilteredCourses(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<Course>`
		SELECT *
		FROM courses
    WHERE
      courses.name ILIKE ${`%${query}%`} OR
      courses.description ILIKE ${`%${query}%`}
      ORDER BY courses.name ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
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

export async function fetchCourseNames() {
  let formattedName: String;
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
    throw new Error('Failed to fetch class names.');
  }
}

export async function fetchCoursesPages(query: string) {
  try {
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

export async function fetchApparatuses() {
  let formattedName: String;
  try {
    const data = await sql<Apparatus>`
        SELECT *
        FROM apparatuses
        ORDER BY name ASC;
      `;

    const apparatuses = data.rows.map((apparatus) => ({

      ...apparatus,
      imageLink: formatLink(apparatus.name),
    }));

    return apparatuses;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch apparatus list.');
  }
}

export async function fetchEventApparatuses() {
  try {
    const data = await sql<Apparatus>`
        SELECT *
        FROM apparatuses
        WHERE type = 'event'
        ORDER BY name ASC;
      `;

    const apparatuses = data.rows.map((apparatus) => ({

      ...apparatus,
      imageLink: formatLink(apparatus.name),
    }));

    return apparatuses;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch event apparatus list.');
  }
}

export async function fetchApparatusNames() {
  let formattedName: String;
  try {
    const data = await sql<Apparatus>`
        SELECT name
        FROM apparatuses
        ORDER BY apparatuses.name ASC;
      `;
    const apparatuses = data.rows.map((apparatus) => ({
      ...apparatus,
    }));
    return apparatuses.map((apparatus) => apparatus.name);

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch event apparatus names.');
  }
}

export async function fetchEventApparatusNames() {
  let formattedName: String;
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
    throw new Error('Failed to fetch event apparatus names.');
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

export async function fetchFilteredSkills(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
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
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return data.rows.map((result) => ({
      ...result,
    }));

    // return skills;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filtered skills.');
  }
}

export async function fetchSkillsPages(query: string) {
  try {
    const count = await sql`
    SELECT COUNT(*)
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

export async function fetchSkillById(id: string) {
  try {
    const data = await sql<Skill>`
      SELECT *
      FROM skills
      WHERE id = ${id};
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


export async function fetchDrills() {
  try {
    const data = await sql<Drill>`
      SELECT *
      FROM drills
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

export async function fetchFilteredDrills(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<Drill>`
		SELECT *
		FROM drills
    WHERE
      TRIM(skill) ILIKE ${`%${query}%`} OR
      TRIM(description) ILIKE ${`%${query}%`} OR
      TRIM(instructions) ILIKE ${`%${query}%`} OR
      TRIM(apparatus) ILIKE ${`%${query}%`} OR
      TRIM(equipment) ILIKE ${`%${query}%`} OR
      TRIM(purpose) ILIKE ${`%${query}%`}
      ORDER BY skill ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return data.rows.map((result) => ({
      ...result,
    }));

    //return drills;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filtered drills.');
  }
}

export async function fetchDrillsPages(query: string) {
  try {
    const count = await sql`
    SELECT COUNT(*)
    FROM drills
    WHERE
      drills.skill ILIKE ${`%${query}%`} OR
      drills.description ILIKE ${`%${query}%`} OR
      drills.instructions ILIKE ${`%${query}%`} OR
      drills.apparatus ILIKE ${`%${query}%`} OR
      drills.equipment ILIKE ${`%${query}%`} OR
      drills.purpose ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of drills.');
  }
}

export async function fetchDrillById(id: string) {
  try {
    const data = await sql<Drill>`
      SELECT *
      FROM drills
      WHERE id = ${id};
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


export async function fetchFilteredGames(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<Game>`
		SELECT *
		FROM games
    WHERE
      TRIM(name) ILIKE ${`%${query}%`} OR
      TRIM(instructions) ILIKE ${`%${query}%`} OR
      TRIM(apparatus) ILIKE ${`%${query}%`} OR 
      TRIM(equipment) ILIKE ${`%${query}%`}

      ORDER BY name ASC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
	  `;

    return data.rows.map((game) => ({
      ...game,
    }));

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filtered games.');
  }
}

export async function fetchGamesPages(query: string) {
  try {
    const count = await sql`
    SELECT COUNT(*)
    FROM games
    WHERE
      games.name ILIKE ${`%${query}%`} OR
      games.instructions ILIKE ${`%${query}%`} OR
      games.apparatus ILIKE ${`%${query}%`} OR
      games.equipment ILIKE ${`%${query}%`}
  `;

      // TRIM(name) ILIKE ${`%${query}%`} OR
      // TRIM(instructions) ILIKE ${`%${query}%`} OR
      // TRIM(apparatus) ILIKE ${`%${query}%`} OR
      // TRIM(equipment) ILIKE ${`%${query}%`}

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of games.');
  }
}

export async function fetchGameById(id: string) {
  try {
    const data = await sql<Game>`
      SELECT *
      FROM games
      WHERE id = ${id};
    `;

    const games = data.rows.map((game) => ({
      ...game,
    }));

    return games[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch game.');
  }
}