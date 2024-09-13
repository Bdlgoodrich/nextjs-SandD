import { sql } from '@vercel/postgres';
import {
  User,
  Skill,
  Drill,
  Apparatus,
  Course,
} from './definitions';

export async function fetchClasses() {
  try {

    const data = await sql<String>`SELECT * FROM classes`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch class list.');
  }
}

export async function fetchApparatuses() {
  try {

    const data = await sql<String>`SELECT * FROM apparatuses`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch class list.');
  }
}
/*
export async function fetchCardData() {
const ITEMS_PER_PAGE = 6;
export async function fetchFilteredSkills(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const skills = await sql<SkillsTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}*/

export async function fetchSkillsPages(query: string) {
  try {
    const ITEMS_PER_PAGE = 10;
    const count = await sql`SELECT COUNT(*)
    FROM skills
    WHERE
      skills.name ILIKE ${`%${query}%`} OR
      skills.description ILIKE ${`%${query}%`} OR
      skills.apparatus ILIKE ${`%${query}%`} OR
      skills.group ILIKE ${`%${query}%`}
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
      skills.group ILIKE ${`%${query}%`}
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

