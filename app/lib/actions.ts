'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
 
const SkillFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  apparatus: z.string(),
  course: z.string(),
});
 
const CreateSkill = SkillFormSchema.omit({ id: true });
 
export async function createSkill(formData: FormData) {
    const { name, description, apparatus, course } = CreateSkill.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    apparatus: formData.getAll('apparatus').toString(),
    course: formData.getAll('course').toString(),
    });
  const formattedApparatus = apparatus.replaceAll('&',' , ');
  const formattedCourse = course.replaceAll('&',' , ');
  console.log('name:'+ name + ' description:'+ description + ' apparatuses:'+ apparatus + ' courses:'+ course);

//   await sql`
//     INSERT INTO invoices (name, description, apparatus, course)
//     VALUES (${name}, ${description}, ${formattedApparatus}, ${formattedCourse})
//   `;
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