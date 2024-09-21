'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { fetchCourseNames, fetchEventApparatuses, fetchEventApparatusNames } from './data';
 
const SkillFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  apparatus: z.string(),
  course: z.string(),
});
 
const CreateSkill = SkillFormSchema.omit({ id: true });
 
export async function createSkill(formData: FormData) {
  const eventNames = await fetchEventApparatusNames();
  let apparatuses = "";
  eventNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status === "on") apparatuses += `${name}, `;
  })
  let lastComma = apparatuses.lastIndexOf(',');
  const formattedApparatuses = apparatuses.slice(0,lastComma);

  const courseNames = await fetchCourseNames();
  let courses = "";
  courseNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status == "on") courses += `${name}, `;
  })
  lastComma = courses.lastIndexOf(',');
  const formattedCourses = courses.slice(0,lastComma);

    const { name, description, apparatus, course } = CreateSkill.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    apparatus: formattedApparatuses,
    course: formattedCourses,
    });

  // await sql`
  //   INSERT INTO skills (name, description, apparatus, course)
  //   VALUES (${name}, ${description}, ${formattedApparatuses}, ${formattedCourses})
  // `;
}

export async function createDrill(formData: FormData) {
    const rawFormData = {
      skill: formData.get('skill'),
      description: formData.get('description'),
      instructions: formData.get('instructions'),
      apparatus: formData.get('apparatus'),
      equipment: formData.get('equipment'),
    };
    // Test it out:
    console.log(rawFormData);
  }