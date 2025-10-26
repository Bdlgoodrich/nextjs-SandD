import SkillsForm from '@/app/ui/skills/create-form';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import { fetchSkillsList } from '@/app/lib/data';
 
export default async function Page() {
  const skills = await fetchSkillsList();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Skills', href: '/home/skills' },
          {
            label: 'Create Skill',
            href: '/home/skills/create',
            active: true,
          },
        ]}
      />
      <SkillsForm skills={skills} />
    </main>
  );
}