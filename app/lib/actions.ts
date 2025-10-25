'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { fetchApparatusNames, fetchCourseNames, fetchEventApparatusNames } from './data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

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
  const formattedApparatuses = apparatuses.slice(0, lastComma);

  const courseNames = await fetchCourseNames();
  let courses = "";
  courseNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status == "on") courses += `${name}, `;
  })
  lastComma = courses.lastIndexOf(',');
  const formattedCourses = courses.slice(0, lastComma);

  const { name, description, apparatus, course } = CreateSkill.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    apparatus: formattedApparatuses,
    course: formattedCourses,
  });

  const lowercaseName = name.toLowerCase();

  // try {

  //   await sql`
  //   INSERT INTO skills (name, description, apparatus, course)
  //   VALUES (${lowercaseName}, ${description}, ${apparatus}, ${course})
  // `;

  // } catch (error) {
  //   return {
  //     message: 'Error: You are not authorized to alter the database.',
  //   };
  // }

  revalidatePath('/home/skills');
  redirect('/home/skills');
}


const UpdateSkill = SkillFormSchema;

export async function updateSkill(formData: FormData) {
  const eventNames = await fetchEventApparatusNames();
  let apparatuses = "";
  eventNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status === "on") apparatuses += `${name}, `;
  })
  let lastComma = apparatuses.lastIndexOf(',');
  const formattedApparatuses = apparatuses.slice(0, lastComma);

  const courseNames = await fetchCourseNames();
  let courses = "";
  courseNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status == "on") courses += `${name}, `;
  })
  lastComma = courses.lastIndexOf(',');
  const formattedCourses = courses.slice(0, lastComma);

  const { id, name, description, apparatus, course } = UpdateSkill.parse({
    id: formData.get('id'),
    name: formData.get('name'),
    description: formData.get('description'),
    apparatus: formattedApparatuses,
    course: formattedCourses,
  });

  const lowercaseName = name.toLowerCase();
  // try {
  //   await sql`
  //     UPDATE skills
  //     SET name=${lowercaseName}, description=${description}, apparatus=${apparatus}, course=${course}
  //     WHERE id = ${id}
  //   `;
  // } catch (error) {
  //   return {
  //     message: 'Error: You are not authorized to alter the database.',
  //   };
  // }

  revalidatePath('/home/skills');
  redirect('/home/skills');
}



const DrillFormSchema = z.object({
  id: z.string(),
  skill: z.string(),
  description: z.string(),
  instructions: z.string(),
  apparatus: z.string(),
  equipment: z.string(),
  purpose: z.string(),
  videoLink: z.string()
});

const CreateDrill = DrillFormSchema.omit({ id: true });

export async function createDrill(formData: FormData) {
  const apparatusNames = await fetchApparatusNames();
  let apparatuses = "";
  apparatusNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status === "on") apparatuses += `${name}, `;
  })
  let lastComma = apparatuses.lastIndexOf(',');
  const formattedApparatuses = apparatuses.slice(0, lastComma);

  const { skill, description, instructions, apparatus, equipment, purpose, videoLink } = CreateDrill.parse({
    skill: formData.get('skill'),
    description: formData.get('description'),
    instructions: formData.get('instructions'),
    apparatus: formattedApparatuses,
    equipment: formData.get('equipment'),
    //purpose: formData.get('purpose'),
    purpose: 'learning',
    videoLink: formData.get('videoLink')
  });

  // try {
  //   await sql`
  //   INSERT INTO drills (skill, description, instructions, apparatus, equipment, purpose, videolink)
  //   VALUES (${skill}, ${description}, ${instructions}, ${apparatus}, ${equipment}, ${purpose}, ${videoLink})
  // `;
  // } catch (error) {
  //   return {
  //     message: 'Error: You are not authorized to alter the database.',
  //   };
  // }

  revalidatePath('/home/drills');
  redirect('/home/drills');
}

const UpdateDrill = DrillFormSchema;


export async function updateDrill(formData: FormData) {
  const apparatusNames = await fetchApparatusNames();
  let apparatuses = "";
  apparatusNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status === "on") apparatuses += `${name}, `;
  })
  let lastComma = apparatuses.lastIndexOf(',');
  const formattedApparatuses = apparatuses.slice(0, lastComma);

  const { id, skill, description, instructions, apparatus, equipment, purpose, videoLink } = UpdateDrill.parse({
    id: formData.get('id'),
    skill: formData.get('skill'),
    description: formData.get('description'),
    instructions: formData.get('instructions'),
    apparatus: formattedApparatuses,
    equipment: formData.get('equipment'),
    //purpose: formData.get('purpose'),
    purpose: 'learning',
    videoLink: formData.get('videoLink')
  });


  // try {
  //   await sql`
  //     UPDATE drills
  //     SET skill=${skill}, description=${description}, instructions=${instructions}, apparatus=${apparatus}, equipment=${equipment}, purpose=${purpose}, videoLink=${videoLink}
  //     WHERE id = ${id}
  // `;
  // } catch (error) {
  //   return {
  //     message: 'Error: You are not authorized to alter the database.',
  //   };
  // }

  revalidatePath('/home/drills');
  redirect('/home/drills');
}

const GameFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  instructions: z.string(),
  apparatus: z.string(),
  equipment: z.string(),
});

const CreateGame = GameFormSchema.omit({ id: true });

export async function createGame(formData: FormData) {
  const apparatusNames = await fetchApparatusNames();
  let apparatuses = "";
  apparatusNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status === "on") apparatuses += `${name}, `;
  })
  let lastComma = apparatuses.lastIndexOf(',');
  const formattedApparatuses = apparatuses.slice(0, lastComma);

  const { name, instructions, apparatus, equipment } = CreateGame.parse({
    name: formData.get('name'),
    instructions: formData.get('instructions'),
    apparatus: formattedApparatuses,
    equipment: formData.get('equipment'),
    videoLink: formData.get('videoLink')
  });

  // try {
  //   await sql`
  //   INSERT INTO games (name, instructions, apparatus, equipment)
  //   VALUES (${name}, ${instructions}, ${apparatus}, ${equipment} )
  // `;
  // } catch (error) {
  //   return {
  //     message: 'Error: You are not authorized to alter the database.',
  //   };
  // }

  revalidatePath('/home/games');
  redirect('/home/games');
}

const UpdateGame = GameFormSchema;

export async function updateGame(formData: FormData) {
  const apparatusNames = await fetchApparatusNames();
  let apparatuses = "";
  apparatusNames.map((name) => {
    const status = formData.get(`${name}`);
    if (status === "on") apparatuses += `${name}, `;
  })
  let lastComma = apparatuses.lastIndexOf(',');
  const formattedApparatuses = apparatuses.slice(0, lastComma);

  const { id, name, instructions, apparatus, equipment} = UpdateGame.parse({
    id: formData.get('id'),
    name: formData.get('name'),
    instructions: formData.get('instructions'),
    apparatus: formattedApparatuses,
    equipment: formData.get('equipment'),
  });

  // try {
  //   await sql`
  //     UPDATE games
  //     SET name=${name}, instructions=${instructions}, apparatus=${apparatus}, equipment=${equipment}
  //     WHERE id = ${id}
  // `;
  // } catch (error) {
  //   return {
  //     message: 'Error: You are not authorized to alter the database.',
  //   };
  // }

  revalidatePath('/home/games');
  redirect('/home/games');
}


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

