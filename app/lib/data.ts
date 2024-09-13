import { sql } from '@vercel/postgres';
import {
  User,
  Skill,
  Drill,
  Apparatus,
  ClassName,
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
/*
export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}*/

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

export async function fetchFilteredSkills(query: string) {
  try {
    const data = await sql<Skill>`
		SELECT
		  skill.id,
		  skill.name,
		  skill.description,
		  skill.apparatus,
		FROM skills
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  skill.name ILIKE ${`%${query}%`} OR
        skill.email ILIKE ${`%${query}%`}
		GROUP BY skill.id, skill.name, skill.description, skill.apparatus
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((skill) => ({
      ...skill,
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}
