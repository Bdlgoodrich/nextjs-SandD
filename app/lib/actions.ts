'use server';

import { apparatuses } from "./placeholder-data";

 
export async function createSkill(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    description: formData.get('description'),
    apparatus: formData.get('apparatus'),
    course: formData.get('course'),
  };
  // Test it out:
  console.log(rawFormData);
}

export async function createDrill(formData: FormData) {
    const rawFormData = {
      skill: formData.get('customerId'),
      description: formData.get('amount'),
      instructions: formData.get('instructions'),
      apparatus: formData.get('status'),
      equipment: formData.get('equipment'),
    };
    // Test it out:
    console.log(rawFormData);
  }