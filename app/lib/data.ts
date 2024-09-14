import { sql } from '@vercel/postgres';
import {
  User,
  Skill,
  Drill,
  Apparatus,
  Course,
} from './definitions';

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

export async function fetchApparatuses() {
  try {
      const data = await sql<Apparatus>`
        SELECT *
        FROM apparatuses
        ORDER BY apparatuses.name ASC;
      `;
  
      const apparatuses = data.rows.map((apparatus) => ({
        ...apparatus,
        //TODO format links
      }));
  
      return apparatuses;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch class list.');
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
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchSkillById(id: string) {
  try {
    const data = await sql<Skill>`
      SELECT
        skill.id,
        skill.name,
        skill.description,
        skill.apparatus,
        skill.className,
        skill.imageLink,
        skill.videoLink,
      FROM skills
      WHERE skill.id = ${id};
    `;

    const skill = data.rows.map((skill) => ({
      ...skill,
    }));

    return skill[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}
/*
export async function fetchApparatuses() {
  try {
    const data = await sql<Apparatus>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}*/

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
    throw new Error('Failed to fetch customer table.');
  }
}

